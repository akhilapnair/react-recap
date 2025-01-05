import { Component } from "react";

class ClassBasedComponent extends Component {
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    countColor: false,
  };

  handleClick = () => {
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  };
  componentDidMount() {
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  componentDidUpdate(prevProps, prevStates) {
    if (
      prevStates &&
      prevStates.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }

  }

  handleCountClick = () => {
    this.setState({ ...this.state, count: this.state.count + 1 });
  };

  render() {
    const { showText, changeColor,count,changeCountStyle} = this.state;

    return (
      <div>
        {showText ? (
          <h3
            className="title"
            style={{ color: changeColor ? "red" : "black" }}
          >
            ECommerce Project
          </h3>
        ) : (
          <h3 className="title"> Hello React!</h3>
        )}
          <h2 style={{color: changeCountStyle ? 'green':'black'}}>Count is {count}</h2>
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCountClick}>Increase Count</button>
      </div>
    );
  }
}
export default ClassBasedComponent;
