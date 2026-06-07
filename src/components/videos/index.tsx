import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

import useAnalyticsEventTracker from "@core/hooks/useAnalyticsEventTracker";
import YoutubeService from "@core/services/YoutubeService";
import { YoutubeVideo } from "@core/models/youtube-video";
import { Environment } from "@core/environment";

import Section from "@components/section";

import styles from "./videos.module.css";
import ListItem from "@components/list-item";

export default function Videos() {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const trackError = useAnalyticsEventTracker("error");
  const { t } = useTranslation("common");

  const getLastVideos = useCallback(async () => {
    try {
      let videos = await YoutubeService.getVideos(Environment.youtubeChannelId, 6);
      setVideos(videos);
    } catch (error) {
      trackError("youtube", (error as Error).message);
    }
  }, [setVideos, trackError]);

  useEffect(() => {
    getLastVideos();
  }, [getLastVideos]);

  if (videos.length > 0) {
    return (
      <Section
        title={t("videos")}
        redirectTitle={t("components:moreVideos")}
        redirect="https://youtube.com/reisdev"
      >
        <div className={styles.container}>
          {videos.map((video) => (
            <ListItem
              key={video.videoId}
              url={video.url}
              date={video.publishedAt}
              title={video.title}
            />
          ))}
        </div>
      </Section>
    );
  } else {
    return <></>;
  }
}
