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
    firebaseApiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
    firebaseAppId: import.meta.env.VITE_FIREBASE_APP_ID || "",
    firebaseMessageSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID || "",
    firebaseProjectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
    googleAnalyticsId: import.meta.env.VITE_GA_ID || "",
    youtubeChannelId: import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "",
    youtubeAPIKey: import.meta.env.VITE_YOUTUBE_API_KEY || ""
}