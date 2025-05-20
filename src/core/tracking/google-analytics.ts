import { Environment } from "@core/environment";
import ReactGA from "react-ga4";

if(import.meta.env.NODE_ENV === "production") {
    ReactGA.initialize(Environment.googleAnalyticsId);
}