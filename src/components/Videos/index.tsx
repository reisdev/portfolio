import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

import useAnalyticsEventTracker from "core/hooks/useAnalyticsEventTracker";
import YoutubeService from "core/services/YoutubeService";
import { YoutubeVideo } from "core/models/youtube-video";
import { Environment } from "core/environment";

import Section from "components/Section";
import Card from "components/Card";

import styles from "./Videos.module.css"

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
        redirect="https://youtube.com/reisdev"
      >
        <div className={styles.container}>
          {videos.map((video) => (
            <Card
              id={video.videoId}
              key={video.videoId}
              url={video.url}
              publishedAt={video.publishedAt}
              title={video.title}
              cover={video.cover}
              type="video"
            />
          ))}
        </div>
      </Section>
    );
  } else {
    return <></>;
  }
}
