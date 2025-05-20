import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useAnalyticsEventTracker from "@core/hooks/useAnalyticsEventTracker";

import YoutubeService from "@core/services/YoutubeService";
import { YoutubeVideo } from "@core/models/youtube-video";

import styles from "./Videos.module.css";
import Card from "components/Card";

export default function Videos() {
    const { t } = useTranslation("common");
    const trackError = useAnalyticsEventTracker("error");

    const [videos, setVideos] = useState<YoutubeVideo[]>([]);

    const getVideos = useCallback(async () => {
        try {
            let videos = await YoutubeService.getVideos("UC4sSLAid-EtLsGB25uO0pDw", 30);
            setVideos(videos);
        } catch (e) {
            trackError("youtube", (e as Error).message);
        }
    }, [setVideos, trackError]);

    useEffect(() => {
        getVideos()
    }, [getVideos])

    return <main className={styles.container}>
        <h1 className={styles.header}>{t("videos")}</h1>
        <section className={styles.list}>
            {videos.map((video) =>
                <Card
                    id={video.videoId}
                    key={video.videoId}
                    url={video.url}
                    publishedAt={video.publishedAt}
                    title={video.title}
                    cover={video.cover}
                    type='video'
                />)}
        </section>
    </main>
}