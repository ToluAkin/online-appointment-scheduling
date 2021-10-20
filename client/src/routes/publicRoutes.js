import Homepage from "../views/pages/Homepage";
import SignUp from "../views/pages/SignUp";
import { routes } from "./index";

export const PublicRoutes = [
    { 'component': Homepage, 'path':  routes.Home, exact: true },
    { 'component': SignUp, 'path': routes.SignUp },
]