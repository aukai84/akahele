import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
import './index.css';

import {
	BrowserRouter as Router,
	Route,
	link
} from 'react-router-dom';
import Nav from './components/HomeNav.jsx';

ReactDOM.render(
  <Router>
  <div>
  <div className="nav-div">
  <Nav/>
  </div>
  <Route path='/home' component={ HomePage } />
  <Route path='/nation' component={ App } />
  </div>

  </Router>,
  document.getElementById('root')
);
