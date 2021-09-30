import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainSlider from './components/MainSlider';

// page & layout import
import SiteHeader from "./components/SiteHeader";
import MainProduct from './components/MainProduct';
import MainCompany from './components/MainCompany';
import Equipment from './components/Equipment';
import Client from './components/Client';
import NewsNotice from './components/NewsNotice';
import Footer from './components/Footer';

import Company from './pages/Company';
import Product from './pages/Product';
import Notice from './pages/Notice';


function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
          <Route path="/" exact={true} >
            <SiteHeader isSub={false} />
            <MainSlider />
            <section id='container'>
              <MainProduct />
              <MainCompany />
              <Equipment />
              <Client /> 
              <NewsNotice />
            </section>
          </Route>
          <Route path="/company" exact={true} >
            <SiteHeader isSub={true} />
            <Company />
          </Route>
          <Route path="/product" exact={true} >
            <SiteHeader isSub={true} />
            <Product />
          </Route>
          <Route path="/facilities" exact={true} >
            <SiteHeader isSub={true} />
            <div>
              <h1>Facilities</h1>
            </div>
          </Route>
          <Route path="/news" exact={true} >
            <SiteHeader isSub={true} />
            <div>
              <h1>NEWS</h1>
            </div>
          </Route>
          <Route path="/notice" exact={true} >
            <SiteHeader isSub={true} />
            <Notice />
          </Route>
          <Route path="/" >
            <div><h1>접속 오류....</h1></div>
          </Route>

        </Switch>
        <Footer />
      </div>

    </Router>
    
  );
}

export default App;
