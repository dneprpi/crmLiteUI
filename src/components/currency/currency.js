import { supportsGoWithoutReloadUsingHash } from "history/DOMUtils";
import React, { Component } from "react";
import "./currency.css";

export default class Currency extends Component {
  constructor() {
    super();
    this.state = { totalAmount: Number, totalDollarAmount: Number };
  }
  render() {
    return (
      <div className="currency-page">
        <div className="column left currency-page">
          <h3>Total: 0{this.props.totalAmount}$</h3>
          <h3>Dollars: 0{this.props.totalDollarAmount}$</h3>
        </div>
        <div className="column right currency-page">
          <a href="https://www.w3schools.com/" target="_blank">View history</a>
          <br></br>
          <a href='https://www.freecodecamp.org/'><button className="btn"><i class="fa fa-plus"></i></button></a>
          <div className="divider"/>
          <a href='https://www.freecodecamp.org/'><button className="btn"><i class="fa fa-minus"></i></button></a>
        </div>
      </div>
    );
  }
}
