import config from "~/config";

// layout

import { HeaderOnly } from "../layouts";
import LoginLayout from "../layouts/LoginLayout";
import RegisterLayout from "../layouts/RegisterLayout/RegisterLayout";

const publicRoutes = [
    { path:config.routes.home },
    { path:config.routes.guide,  layout: HeaderOnly},
    { path:config.routes.login,  layout: LoginLayout},
    { path:config.routes.register,  layout: RegisterLayout}
];

const privateRoutes = {

}

export {publicRoutes,privateRoutes}