import { Environment } from "core/environment";
import ReactGA from "react-ga4";

if(process.env.NODE_ENV === "production") {
    ReactGA.initialize(Environment.googleAnalyticsId);
}