import React from 'react';
import {Link} from 'react-router-dom';

const App = () => {
    return (
        <ul>
            <li ><Link to='/home'>APP</Link></li>
            <li ><Link to='/nation'>MAP</Link></li>
        </ul>
    )
}

export default App;