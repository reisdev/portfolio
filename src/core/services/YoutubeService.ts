import { YoutubeVideo } from "core/models/youtube-video";

export default class YoutubeService {
    static baseURL = new URL("https://www.googleapis.com/youtube/v3/");

    static async getVideos(channelId: string, itemsPerPage: number = 6): Promise<YoutubeVideo[]> {

        let search = new URLSearchParams({
            key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
            channelId: channelId,
            type: "video",
            part: "snippet",
            maxResults: itemsPerPage.toString(),
            order: "date"
        });

        let url = new URL("search", YoutubeService.baseURL);
        url.search = search.toString();

        let response = await fetch(url);
        let data = await response.json();

        let videos = data.items.map((item: any) => { 
            return Object.assign(new YoutubeVideo(), item.id, item.snippet)
        });

        return videos;
    }
}