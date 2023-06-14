/// <reference types="react-scripts" />

declare namespace NodeJS {
    export interface ProcessEnv {
        REACT_APP_GA_ID: string | undefined
        REACT_APP_YOUTUBE_API_KEY: string | undefined
        REACT_APP_FIREBASE_API_KEY: string | undefined
        REACT_APP_FIREBASE_PROJECT_ID: string | undefined
        REACT_APP_FIREBASE_MESSAGE_SENDER_ID: string | undefined
        REACT_APP_FIREBASE_APP_ID: string | undefined
    }
}