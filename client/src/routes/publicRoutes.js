import Homepage from "../views/pages/Homepage";
import Login from "../views/pages/Login";
import { routes } from "./index";

export const PublicRoutes = [
    { 'component': Homepage, 'path':  routes.Home, exact: true },
    { 'component': Login, 'path': routes.Login },
]