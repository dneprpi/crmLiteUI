import { supportsGoWithoutReloadUsingHash } from "history/DOMUtils";
import React, { Component } from "react";
import "./currency.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getAllWallets,
  getUSDWalletAmount,
  getRateByCurrencyCode,
  getAllOperationTypes,
  getTotalWalletsBalance,
} from "../../requests";
import Deposit from "../deposit";
import { Link } from "react-router-dom";

export default class Currency extends Component {
  constructor() {
    super();
    this.state = {
      totalAmount: Number,
      dollarAmount: Number,
      wallets: [],
      currentRateExisting: [],
      operationTypes: [],
    };
  }

  getUSDWallet() {
    return this.state.wallets.find((el) => el.currency.code === "USD");
  }

  componentDidMount(leadID = "f9168c5e-ceb2-4faa-b6bf-329bf39fa1e4") {
    const arr = []

    
    getAllWallets(leadID)
      .then((response) => {
        this.state.wallets = response.data;
        this.fillSelectCurrencyToSell();

        sessionStorage.setItem(
          "USDWallet",
          JSON.stringify(this.getUSDWallet())
        );
      })
      .then(() => {
        
        this.state.wallets.forEach((element) => {
          getRateByCurrencyCode(element.currency.code).then((response) => response)
          .then(data => data.data)
          .then(data => {
            arr.push(data.value)
            console.log(arr)
            console.log(arr[0])

          })
        });
        // sessionStorage.setItem("existingRates", JSON.stringify(this.state.currentRateExisting));
      })
      .then(() => console.log(this.state.currentRateExisting));
    getUSDWalletAmount(leadID).then((response) => {
      this.setState({ dollarAmount: response.data.amount });
    });
    console.log(this.state.currentRateExisting)
    getAllOperationTypes().then((response) => {
      this.setState({ operationTypes: response.data });

      sessionStorage.setItem(
        "operationTypes",
        JSON.stringify(this.state.operationTypes)
      );
    });


    setTimeout(() => {
      console.log('tim ', arr)
    }, 1000)
console.log('qweqweqwe', arr)
    getTotalWalletsBalance(leadID).then((response) => {
      this.setState({ totalAmount: response.data });
    });
  }

  onSelectItemChange() {
    var selectedCurrency = document.getElementById(
      "selectCurrencyToSell"
    ).value;

    document.getElementById("labelExRateToSell").innerHTML = selectedCurrency;
  }

  fillSelectCurrencyToSell() {
    var select = document.getElementById("selectCurrencyToSell");

    this.state.wallets.forEach((element) => {
      let opt = document.createElement("option");
      opt.value = element.currency.code;
      opt.innerHTML = element.currency.code;
      select.appendChild(opt);
    });
  }

  // getArr(index){

  //   // return JSON.parse(sessionStorage.getItem("existingRates"));
  // }

  render() {
    // const arrRow = this.getArr();

    return (
      <div>
        <div className="container margin-top">
          <div className="row">
            <h4 className="col">Total: 0{this.state.totalAmount}$</h4>
            {/* TODO change url */}
            <a
              className="col"
              href="https://www.w3schools.com/"
              target="_blank"
            >
              View history
            </a>
          </div>
          <div className="row">
            <h4 className="col">Dollars: {this.state.dollarAmount}$</h4>
            <div className="col">
              <Link to="/curency-deposit">
                <button className="btn border border-primary">Deposit</button>
              </Link>
              <div className="divider" />
              <Link to="/curency-withdraw">
                <button className="btn border border-primary">Withdraw</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="currency-page center">
          <h3 className="d-flex justify-content-center margin-top">
            Your wallets
          </h3>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Currency</th>
                <th>Amount</th>
                <th>Exchange rate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.wallets.map((element, index) => {
                // getRateByCurrencyCode(w.currency.code).then((response)=>{
                //   this.setState({currentRate: response.data.value});
                // });
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{element.currency.code}</td>
                    <td>{element.amount}</td>
                    {/* <td>{arrRow[index]}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="horizontal-line"></div>
        <div className="currency-page-60 center">
          <h3 className="d-flex justify-content-center margin-top">
            Sell currency
          </h3>
          {/* TODO Craete sellCurrency method */}
          <form onSubmit="return sellCyrrency()">
            <div className="row">
              <select
                id="selectCurrencyToSell"
                className="col"
                onChange={this.onSelectItemChange}
              >
                <option value="" disabled selected>
                  Choose currency
                </option>
              </select>
              <input
                id="currencyAmountToSell"
                name="currencyAmountToSell"
                placeholder="Amount"
                className="col"
              ></input>
              <label id="labelExRateToSell" className="col">
                <u>Exchange rate: </u>
              </label>
              <label id="labelTotalToSell" className="col">
                <u>Total: </u>
              </label>
              <button className="col">Sell</button>
            </div>
          </form>
        </div>
        <div className="horizontal-line"></div>
        <div className="currency-page-60 center">
          <h3 className="d-flex justify-content-center margin-top">
            Buy currency
          </h3>
          {/* TODO Craete buyCurrency method */}
          <form onSubmit="return buyCyrrency()">
            <div className="row">
              {/* TODO selectCurrencyToBuy */}
              <select id="selectCurrencyToBuy" className="currency-width col">
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
              </select>
              <input
                id="currencyAmountToBuy"
                name="currencyAmountToBuy"
                placeholder="Amount"
                className="col"
              ></input>
              <label id="exRateToBuy" className="col"></label>
              <label id="totalToBuy" className="col">
                <u>Total: </u>
              </label>
              <button className="col">Buy</button>
            </div>
          </form>
        </div>
        <div className="horizontal-line"></div>
        <div className="currency-page center">
          <h3 className="d-flex justify-content-center margin-top">
            Available currencies
          </h3>
          <table className="table">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Exchange rate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.wallets.map((w, index) => {
                return <tr key={index}></tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
