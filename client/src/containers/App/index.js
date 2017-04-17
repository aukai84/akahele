import React, { Component } from 'react';
import './index.css';
import {requestHelper} from '../../lib/modules.js';
// import Sidebar from 'react-sidebar';
import { SideNav, Chevron, Icon } from 'react-side-nav';

 const menuItems = [
  { id: 1,
    label: 'Side Menu',
    icon: 'fa-battery-half',
    items: [
      { id: 11,
        label: 'Charts',
        icon: 'fa-car',
        link: '/item11',
      },
      { id: 12,
        label: 'Maps',
        icon: 'fa-bullhorn',
        link: '/item12',
      },
      { id: 13,
        label: 'More stuff',
        icon: 'fa-bullhorn',
        link: '/item13',
      },
    ],
  },
];
const NavLink = props => (<a href={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</a>);

class App extends Component {
    constructor(){
        super();
        this.state = {
            honolulu: []
            // sidebarOpen: true
        }
        // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
  //   onSetSidebarOpen= function(open) {
  //   this.setState({sidebarOpen: open});
  // }

    displayHonoluluData(){
        requestHelper('GET', 'http://localhost:8080/cities/Honolulu/crime')
        .then(data => {
            console.log(data)
            this.setState({
                honolulu: this.state.honolulu.concat(data)
            })
        })
    }
   

    componentWillMount(){
        this.displayHonoluluData();
    }


  render() {
        // var sidebarContent = <b>Sidebar content</b>;
        console.log(this.state)

    return (
      <div className="homePage">
         <div className="App-header">
              <h2>Welcome to React!!</h2>
         </div>
         <div className="sidebar">
         <SideNav
            items={menuItems}
            linkComponent={NavLink}
            chevronComponent={Chevron}
            iconComponent={Icon}
        />

        </div>
         <p className="App-intro">
              Hello World
         </p>
         
         <h1>TEST DATA FROM HONOLULU</h1>
         <ul>
             {
                this.state.honolulu.map(crime => {
                    console.log('crimes ', crime)
                    return (
                            <li>
                                <h2>id = {crime.id}</h2>
                                <p>year = {crime.year}</p>
                                <p>violent crime = {crime.violent_crime}</p>
                            </li>
                    )
                })
             }
         </ul>
    
       
     </div>
    );
  }
}

export default App;