import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Environment } from "@core/environment";

const FirebaseConfig = {
    apiKey: Environment.firebaseApiKey,
    authDomain: `${Environment.firebaseProjectId}.firebaseapp.com`,
    projectId: Environment.firebaseProjectId,
    storageBucket: `${Environment.firebaseProjectId}.appspot.com`,
    messagingSenderId: Environment.firebaseMessageSenderId,
    appId: Environment.firebaseAppId
};

let analytics: Analytics | null = null;

if(import.meta.env.NODE_ENV === "production") {
    const app = initializeApp(FirebaseConfig);
    analytics = getAnalytics(app);
}

export default analytics;