import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { PublicRoutes } from './routes/publicRoutes';
import Navbar from "./views/components/Navbar";
import Login from "./views/pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Login />
            <Switch>
                { PublicRoutes.map((publicRoute, i) => {
                    return <Route  exact={ publicRoute.exact } Key={ i } path={ publicRoute.path } component={ publicRoute.component } />
                })}
                
            </Switch>
        </BrowserRouter>
    );
}

export default App;
