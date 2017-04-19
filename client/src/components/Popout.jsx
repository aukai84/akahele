import React from 'react';
import Popout from 'react-popout';

class PopoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.popout = this.popout.bind(this);
    this.popoutClosed = this.popoutClosed.bind(this);
    this.popoutContentClicked = this.popoutContentClicked.bind(this);
    this.state = { isPoppedOut: false };
  }

  popout() {
    this.setState({isPoppedOut: true});
  }

  popoutClosed() {
    this.setState({isPoppedOut: false});
  }

  popoutContentClicked(){
    this.popoutClosed();
  }

  render() {
    if (this.state.isPoppedOut) {
      return (
        <Popout url='popout.html' title='Window title' onClosing={this.popoutClosed}>
          <div>Popped out content!</div>
          <div onClick={this.popoutContentClicked}>Close</div>
        </Popout>
      );
    } else {
      var popout = <span onClick={this.popout} className="buttonGlyphicon glyphicon glyphicon-export"></span>
      return (
        <div>
          <strong>Section <a style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={this.popout}>(pop window out)</a></strong>
          <div>Inline content</div>
        </div>
      );
    }
  }
}
export default PopoutComponent;