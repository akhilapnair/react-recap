import { Component } from "react";

class ClassBasedComponent extends Component {

  state = {
    showText: false,
  };

  handleClick = () => {
    this.setState({
      showText: !this.state.showText,
    });
  };

  render() {
    const { showText } = this.state;
    
    return (
      <div>
        
        {showText ? <h3 className="title">ECommerce Project</h3> : <h3 className="title"> Hello React!</h3>}
        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}
export default ClassBasedComponent;
