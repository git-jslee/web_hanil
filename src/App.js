import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// page & layout import
import routes from './routes';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import { GnbMenuList } from './components/MenuItems';
import SubMenu from './components/SubMenu';

const App = () => {
  // const [selected, setSelected] = useState(GnbMenuList[0].menuLists[0]);
  const [selected, setSelected] = useState([]);
  const onClick = (clicked) => {
    setSelected(clicked);
  };

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
                {route.path !== '/' && (
                  <SubMenu
                    subMenu={GnbMenuList[Number(route.snbindex)].menuLists}
                    onClick={onClick}
                    selected={selected}
                    subTitle={GnbMenuList[Number(route.snbindex)].name}
                  />
                )}
                <route.component selected={selected} onClick={onClick} />
              </Route>
            );
          })}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
