import { useEffect, useState, useCallback } from 'react';
import Carousel from 'components/Carousel';
import Card from 'components/Card';

class Post {
    id!: number;
    canonical_url!: string;
    cover_image!: string;
    published_at!: string;
    description!: string;
    slug!: string;
    social_image!: string;
    tag_list!: string[];
    title!: string;
    type_of!: string;
    url!: string;
}

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);

    const getArticles = useCallback(
        async () => {
            await fetch("https://dev.to/api/articles?username=reisdev&per_page=3").then(async res => {
                const data = await res.json();
                setPosts(data.map((post: Post) => Object.assign(new Post(), post)));
            });
        },
        [])

    useEffect(() => {
        getArticles()
    }, [getArticles]);

    return <Carousel title={"Últimos artigos"}>
        {posts.map((post) =>
            <Card
                id={post.id}
                key={post.id}
                title={post.title}
                cover={post.cover_image}
                publishedAt={post.published_at}
                url={post.url}
                tags={post.tag_list}
            />
        )}
    </Carousel>
}