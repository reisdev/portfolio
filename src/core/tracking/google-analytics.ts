import ReactGA from "react-ga4";

if(process.env.NODE_ENV === "production") {
    ReactGA.initialize(process.env.REACT_APP_GA_ID ?? "");
}