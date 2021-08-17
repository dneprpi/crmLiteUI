import { supportsGoWithoutReloadUsingHash } from "history/DOMUtils";
import React, { Component } from "react";
import "./currency.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Currency extends Component {

  constructor() {
    super();
    this.state = { totalAmount: Number, totalDollarAmount: Number };
  }

  render() {
    return (
      <>
      <div className="container currency-page">
        <div className="row">
          <h4 className="col">Total: 0{this.props.totalAmount}$</h4>
          <a className="col" href="https://www.w3schools.com/" target="_blank">View history</a>
        </div>
        <div className="row">
          <h4 className="col">Dollars: 0{this.props.totalDollarAmount}$</h4>
          <div className="col">
            <a href="https://www.freecodecamp.org/"><button className="btn border border-primary"><i class="fa fa-plus"></i></button></a>
            <div className="divider"/>
            <a href="https://www.w3schools.com/"><button className="btn border border-primary"><i class="fa fa-minus"></i></button></a>
          </div>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="container">
        <div className="row">
          <h4 className="col d-flex justify-content-center">Your wallets</h4>
          <h4 className="col d-flex justify-content-center">Your wallets</h4>
        </div>
      </div>
      </>
    );
  }
}
