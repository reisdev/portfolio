import { useEffect, useState, useCallback } from 'react';
import Carousel from 'components/Carousel';
import Card from 'components/Card';
import useAnalyticsEventTracker from 'core/hooks/useAnalyticsEventTracker';
import { useTranslation } from 'react-i18next';

interface Post {
    id: number;
    canonical_url: string;
    cover_image: string;
    published_at: string;
    description: string;
    slug: string;
    social_image: string;
    tag_list: string[];
    title: string;
    type_of: string;
    url: string;
}

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const trackError = useAnalyticsEventTracker("error");
    const { t } = useTranslation("home");

    const getArticles = useCallback(async () => {
        try {
            let response = await fetch("https://dev.to/api/articles?username=reisdev&per_page=3")

            if (response.status === 200) {
                const data: Post[] = await response.json();
                setPosts(data);
            }
        } catch (e) {
            trackError("dev.to", (e as Error).message);
        }
    }, [setPosts, trackError]);

    useEffect(() => {
        getArticles()
    }, [getArticles]);

    return posts.length > 0 ? <Carousel title={t("lastArticles")}>
        {posts.map((post) =>
            <Card
                id={post.id}
                key={post.id}
                url={post.url}
                title={post.title}
                cover={post.cover_image}
                publishedAt={post.published_at}
                tags={post.tag_list}
                type='post'
            />)}
    </Carousel> : <></>
}