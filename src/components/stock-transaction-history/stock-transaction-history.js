import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stock-transaction-history.css";
import { getAllStockTransactionsHistory } from "../../requests";

function checkIsDeposit(isDeposit) {
  if (isDeposit) {
    return (
      <span style={{color:"Green"}}>
        <i class="fas fa-check-circle"></i>
      </span>
    );
  } else {
    return (
      <span style={{color:"Tomato"}}>
        <i class="fas fa-times-circle"></i>
      </span>
    );
  }
}

export default class StockTransactionHistory extends Component {
  constructor() {
    super();
    this.state = { transactions: [], leadID: String, leadToken: String };
  }

  componentDidMount(leadID = "207AE0D0-D42E-4571-983A-02C7A312835D") {
    getAllStockTransactionsHistory(leadID).then((response) => {
      console.log(response);
      this.setState({ transactions: response.data });
    });
  }

  render() {
    return (
      <div className="center">
        <h1 className="d-flex justify-content-center">
          Currency transaction history
        </h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Time</th>
                <th>Deposit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.transactions.map((t, index) => {
                return (
                  <tr key={index}>
                    <td> {t.stockPortfolioID}</td>
                    <td> {t.quantity}</td>
                    <td> {t.stockPrice}</td>
                    <td> {t.timestamp}</td>
                    <td> {checkIsDeposit(t.isDeposit)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
