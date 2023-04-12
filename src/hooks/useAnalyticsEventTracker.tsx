import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category: string) => {
    const tracker = (action = "test action", label = "") => {
        ReactGA.event({category, action, label});
    }
    return tracker;
}

export default useAnalyticsEventTracker;