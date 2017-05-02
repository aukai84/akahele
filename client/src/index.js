import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Chart from './containers/Charts';

// import '../scss/index.scss';

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
            <li ><Link to="/chart">Chart</Link></li>

        </ul>
  </div>
  <Route exact path="/" component={ HomePage } />
  <Route path="/nation" component={ App } />
  <Route path="/chart" component={ Chart } />
  </div>

  </Router>,
  document.getElementById('root')
);
