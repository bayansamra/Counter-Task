import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {

    
  state = {
    count: 0,
    input: parseInt(this.props.input),
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + this.state.input,
    }));
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - this.state.input,
      }));
    }
  };

  render() {
    return (
      <div className="counter">
        <div className={`value ${this.state.input}`}>{this.state.count}</div>
        <button onClick={this.decrement} className="decrement">
          -
        </button>
        <button onClick={this.increment} className="increment">
          +
        </button>
      </div>
    );
  }
}