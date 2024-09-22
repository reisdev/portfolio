interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

export class YoutubeVideo {
    videoId!: string;
    channelId!: string;
    channelTitle!: string;
    description!: string;
    liveBroadcastContent!: string;
    publishTime!: string;
    publishedAt!: string;
    likes?: number

    thumbnails!: { default: Thumbnail; medium: Thumbnail; high: Thumbnail; };
    title!: string;

    get cover(): string {
        return `https://img.youtube.com/vi/${this.videoId}/maxresdefault.jpg`
    }
    get url(): string { return `https://youtu.be/${this.videoId}` }
}