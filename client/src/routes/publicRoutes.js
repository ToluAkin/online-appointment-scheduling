import Homepage from "../views/pages/Homepage";
import Login from "../views/pages/Login";
import SignUp from "../views/pages/SignUp";
import { routes } from "./index";

export const PublicRoutes = [
    { 'component': Homepage, 'path':  routes.Home, exact: true },
    { 'component': Login, 'path': routes.Login },
    { 'component': SignUp, 'path': routes.SignUp },
]