export interface AppEnvironment {
    firebaseApiKey: string;
    firebaseAppId: string;
    firebaseMessageSenderId: string;
    firebaseProjectId: string;
    googleAnalyticsId: string;
    youtubeChannelId: string;
    youtubeAPIKey: string;
}

export const Environment: AppEnvironment = {
    firebaseApiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
    firebaseAppId: process.env.REACT_APP_FIREBASE_APP_ID || "",
    firebaseMessageSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID || "",
    firebaseProjectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "",
    googleAnalyticsId: process.env.REACT_APP_GA_ID || "",
    youtubeChannelId: process.env.REACT_APP_YOUTUBE_CHANNEL_ID || "",
    youtubeAPIKey: process.env.REACT_APP_YOUTUBE_API_KEY || ""
}