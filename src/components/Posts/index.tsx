import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import useAnalyticsEventTracker from "@core/hooks/useAnalyticsEventTracker";
import DEVService from "@core/services/DEVService";
import { Post } from "@core/models/post";

import ListItem from "@components/ListItem";
import Section from "@components/Section";

import styles from "./Posts.module.css";

export default function Posts() {
  const trackError = useAnalyticsEventTracker("error");
  const { t } = useTranslation("common");
  const [posts, setPosts] = useState<Post[]>([]);

  const getArticles = useCallback(async () => {
    try {
      let posts = await DEVService.getArticles("reisdev");
      setPosts(posts);
    } catch (e) {
      trackError("dev.to", (e as Error).message);
    }
  }, [setPosts, trackError]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  if (posts.length > 0) {
    return (
      <Section
        title={t("posts")}
        redirectTitle={t("components:morePosts")}
        redirect="https://dev.to/@reisdev"
      >
        <div className={styles.container}>
        {posts.map((post) => (
          <ListItem
            id={post.id}
            key={post.id}
            title={post.title}
            tags={post.tag_list}
            date={post.published_at}
            url={post.url}
          />
        ))}
        </div>
      </Section>
    );
  } else {
    return <></>;
  }
}
