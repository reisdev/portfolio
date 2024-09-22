import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import useAnalyticsEventTracker from 'core/hooks/useAnalyticsEventTracker';
import { YoutubeVideo } from 'core/models/youtube-video';
import Carousel from 'components/Carousel';
import Card from "../Card";
import YoutubeService from 'core/services/YoutubeService';
import YoutubeLogo from "../../assets/img/youtube.svg";

export default function Youtube() {
    const [videos, setVideos] = useState<YoutubeVideo[]>([]);
    const trackError = useAnalyticsEventTracker("error");
    const { t } = useTranslation("common");

    const getLastVideos = useCallback(async () => {
        try {
            let videos = await YoutubeService.getVideos("UC4sSLAid-EtLsGB25uO0pDw");

            setVideos(videos);
        } catch (error) {
            console.log(error);
            trackError("youtube", (error as Error).message);
        }
    }, [setVideos, trackError]);

    useEffect(() => {
        getLastVideos()
    }, [getLastVideos]);

    if (videos.length > 0) {
        return <Carousel
            title={t("videosTitle")}
            icon={YoutubeLogo}
            redirect='https://youtube.com/reisdev'>
            {
                videos.map(video => (
                    <Card
                        id={video.videoId}
                        key={video.videoId}
                        url={video.url}
                        publishedAt={video.publishedAt}
                        title={video.title}
                        cover={video.cover}
                        type='video'
                    />))
            }
        </Carousel >
    } else {
        return <></>
    }
}