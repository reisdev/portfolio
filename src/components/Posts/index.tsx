import { useEffect, useState, useCallback } from 'react';
import Carousel from 'components/Carousel';
import Card from 'components/Card';
import useAnalyticsEventTracker from 'core/hooks/useAnalyticsEventTracker';
import { useTranslation } from 'react-i18next';
import { Post } from 'core/models/post';
import DEVService from 'core/services/DEVService';
import DEVLogo from "../../assets/img/devto.svg";

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const trackError = useAnalyticsEventTracker("error");
    const { t } = useTranslation("common");

    const getArticles = useCallback(async () => {
        try {
            let posts = await DEVService.getArticles("reisdev");
            setPosts(posts);
        } catch (e) {
            trackError("dev.to", (e as Error).message);
        }
    }, [setPosts, trackError]);

    useEffect(() => {
        getArticles()
    }, [getArticles]);

    if (posts.length > 0) {
        return <Carousel
            title={t("articlesTitle")}
            icon={DEVLogo}
            redirect="https://dev.to/@reisdev">
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
                    viewCount={post.public_reactions_count}
                />)}
        </Carousel>
    } else {
        return <></>
    }
}