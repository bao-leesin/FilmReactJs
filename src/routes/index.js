import config from "~/config";

// pages
import Home from "~/pages/Home";
import Guide from "~/pages/Guide";

// layout
import { HeaderOnly } from "../layouts";

const publicRoutes = [
    { path:config.routes.home ,component: Home},
    { path:config.routes.guide, component: Guide, layout: HeaderOnly}
];

const privateRoutes = {

}

export {publicRoutes,privateRoutes}