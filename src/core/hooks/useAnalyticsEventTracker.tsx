import ReactGA from "react-ga4";
import { logEvent } from "firebase/analytics";

import firebaseAnalytics from "core/tracking/firebase-analytics";

const useAnalyticsEventTracker = (category: string) => {
    const tracker = (action = "test action", label = "") => {
        ReactGA.event({category, action, label});
        logEvent(firebaseAnalytics, category, { content_type: action, content_id: label });
    }

    return tracker;
}

export default useAnalyticsEventTracker;