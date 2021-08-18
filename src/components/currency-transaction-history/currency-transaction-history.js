import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./currency-transaction-history.css";
import { getAllCurrencyTransactionsHistory } from "../../requests";


export default class CurrencyTransactionHistory extends Component {
  constructor() {
    super();
    this.state = { transactions: []};
  }

  componentDidMount(leadId = '207AE0D0-D42E-4571-983A-02C7A312835D') {
    getAllCurrencyTransactionsHistory(leadId).then((response) =>{ 
          this.setState({transactions: response.data});
    })
  };

  render() {
    return (
      <div className="center">
        <h1 className="d-flex justify-content-center">Currency transaction history</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Operation Type</th>
                <th>From</th>
                <th>To</th>
                <th>Amount</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {this.state.transactions.map((t, index) => {
                return (
                  <tr key={index}>
                  <td> {t.operationName}</td>
                  <td> {t.from}</td>
                  <td> {t.to}</td>
                  <td> {t.amount}</td>
                  <td> {t.timestamp}</td>
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