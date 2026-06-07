import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useAnalyticsEventTracker from "@core/hooks/useAnalyticsEventTracker";

import Post from "@core/models/post";
import Card from "@components/card";
import styles from "./posts.module.css";
import DEVService from "@core/services/DEVService";

export default function Posts() {
    const { t } = useTranslation("common");
    const trackError = useAnalyticsEventTracker("error");

    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = useCallback(async () => {
        try {
            let posts = await DEVService.getArticles("reisdev", 30);
            setPosts(posts);
        } catch (e) {
            trackError("dev.to", (e as Error).message);
        }
    }, [setPosts, trackError]);

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return <main className={styles.container}>
        <h1 className={styles.header}>{t("posts")}</h1>
        <section className={styles.list}>
            {posts.map((post) =>
                <Card
                    id={post.id}
                    key={post.id}
                    url={post.url}
                    title={post.title}
                    cover={post.cover_image}
                    publishedAt={post.published_at}
                    tags={post.tag_list}
                    viewCount={post.public_reactions_count}
                    type='post'
                />)}
        </section>
    </main>
}