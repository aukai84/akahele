import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Chart from './containers/Charts';
import GoogleMaps from './components/google-map';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
          <div className="nav-div">
              <div className="home-nav-button">
                  <Link to="/">Akahele</Link>
              </div>
              <div className="other-nav-buttons">
                  <Link to="/">Home</Link> 
                  <Link to="/nation">| Nation Map</Link>
                  <Link to="/local">| Local View</Link>
              </div>
          </div>
          <Switch>
              <Route exact path="/" component={ HomePage } />
              <Route path="/nation" component={ App } />
              <Route path="/local" component={ GoogleMaps } />
          </Switch>
        </div>
  </Router>,
  document.getElementById('root')
);
