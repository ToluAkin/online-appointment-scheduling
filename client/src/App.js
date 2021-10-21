import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { PublicRoutes } from './routes/publicRoutes';
import Navbar from "./views/components/Navbar";

function App() {
    return (
      <BrowserRouter>
          <Navbar />
          <Switch>
              { PublicRoutes.map((publicRoute, i) => {
                  return <Route  exact={ publicRoute.exact } Key={ i } path={ publicRoute.path } component={ publicRoute.component } />
              })}

          </Switch>
      </BrowserRouter>
  ); 
}

export default App;
