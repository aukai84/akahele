import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
<<<<<<< HEAD
import GoogleMaps from './components/google-map/simple_map_page.jsx';
=======
import Chart from './containers/Charts';
import GoogleMaps from './components/google-map';
>>>>>>> efe77317f33dbd02e2f5386a0121b71e091da0a5


import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


ReactDOM.render(
  <Router>
  <div>
  <div className="nav-div">
<<<<<<< HEAD
      <ul>
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/nation">Map </Link></li>
            <li ><Link to="/chart">Local</Link></li>
=======
    
           <div className="home-nav-button"> <Link to="/">Akahele</Link></div>

           <div className="other-nav-buttons"><Link to="/">Home</Link> 
            <Link to="/nation">| Nation Map</Link>
            <Link to="/local">| Local View</Link></div>
>>>>>>> efe77317f33dbd02e2f5386a0121b71e091da0a5

    
  </div>
  <Route exact path="/" component={ HomePage } />
  <Route path="/nation" component={ App } />
<<<<<<< HEAD
  <Route path="/chart" component={ GoogleMaps } />
  </div>
=======
<Route path="/local" component={ GoogleMaps } />
</div>
>>>>>>> efe77317f33dbd02e2f5386a0121b71e091da0a5

  </Router>,
  document.getElementById('root')
);
