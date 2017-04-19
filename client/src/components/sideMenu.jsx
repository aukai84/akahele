// import React from 'react';
// // import Popout from './Popout.jsx';
// import PopoutWindow from 'react-popout';

// class SideMenu extends React.Component{
// 	constructor(props) {
//     super(props);
//     this.popout = this.popout.bind(this);
//     this.popoutClosed = this.popoutClosed.bind(this);
//     this.state = { isPoppedOut: false };
//   }

//   popout() {
//     this.setState({isPoppedOut: true});
//   }

//   popoutClosed() {
//     this.setState({isPoppedOut: false});
//   }

//   render() {
//     if (this.state.isPoppedOut) {
//       return (
//         <PopoutWindow url='popout.html' title='Window title' onClosing={this.popoutClosed}>
//           <div>Popped out content!</div>
//         </PopoutWindow>
//       );
//     } else {
//       var popout = <span onClick={this.popout} className="buttonGlyphicon glyphicon glyphicon-export"></span>
//       return (
//         <div>
//           <strong>Graphs {popout}</strong>
//           <div>Inline content</div>
//         </div>
//       );
//     }
//   }
// }
// export default SideMenu;

