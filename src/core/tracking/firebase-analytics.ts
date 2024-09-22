import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";

const FirebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

let analytics: Analytics | null = null;

if(process.env.NODE_ENV === "production") {
    const app = initializeApp(FirebaseConfig);
    analytics = getAnalytics(app);
}

export default analytics;