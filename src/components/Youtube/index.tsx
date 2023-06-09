import Carousel from 'components/Carousel';
import { useState, useCallback, useEffect } from 'react';

import Card from "../Card";
import useAnalyticsEventTracker from 'core/hooks/useAnalyticsEventTracker';
import { useTranslation } from 'react-i18next';

interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

class YoutubeVideo {
    videoId!: string;
    channelId!: string;
    channelTitle!: string;
    description!: string;
    liveBroadcastContent!: string;
    publishTime!: string;
    publishedAt!: string;

    thumbnails!: { default: Thumbnail; medium: Thumbnail; high: Thumbnail; };
    title!: string;

    get cover(): string {
        return `https://img.youtube.com/vi/${this.videoId}/maxresdefault.jpg`
    }
    get url(): string { return `https://youtu.be/${this.videoId}` }

}

export default function Youtube() {
    const [videos, setVideos] = useState<YoutubeVideo[]>([]);
    const trackError = useAnalyticsEventTracker("error");
    const { t } = useTranslation("home");

    const getLastVideos = useCallback(async () => {
        const url = new URL(`https://www.googleapis.com/youtube/v3/search`);
        const params = {
            key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
            channelId: "UC4sSLAid-EtLsGB25uO0pDw",
            type: "video",
            part: "snippet",
            maxResults: "3",
            order: "date"
        }
        url.search = new URLSearchParams(params).toString();

        await fetch(url.toString()).then(async res => {
            if (res.status === 200) {
                const data = await res.json();
                setVideos(data.items.map((item: any) => Object.assign(new YoutubeVideo(), item.id, item.snippet)));
            }
        }).catch((error) => trackError("youtube", error));
    }, [setVideos, trackError]);

    useEffect(() => { getLastVideos() }, []);

    return videos.length > 0 ? <Carousel title={t("lastVideos")}>
        {videos.map(video => (
            <Card
                id={video.videoId}
                key={video.videoId}
                url={video.url}
                publishedAt={video.publishedAt}
                title={video.title}
                cover={video.cover}
                type='video'
            />))}
    </Carousel> : <></>
}