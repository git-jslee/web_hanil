import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// page & layout import
import routes from './routes';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact === false ? false : true}
              >
                <SiteHeader isSub={route.issub} />
                <route.component />
              </Route>
            );
          })}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
