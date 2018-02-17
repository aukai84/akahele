import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
import GoogleMaps from './components/google-map/simple_map_page.jsx';

import './index.css';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
// import Nav from './components/HomeNav.jsx';

ReactDOM.render(
  <Router>
  <div>
  <div className="nav-div">
      <ul>
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/nation">Map </Link></li>
            <li ><Link to="/chart">Local</Link></li>

        </ul>
  </div>
  <Route exact path="/" component={ HomePage } />
  <Route path="/nation" component={ App } />
  <Route path="/chart" component={ GoogleMaps } />
  </div>

  </Router>,
  document.getElementById('root')
);
