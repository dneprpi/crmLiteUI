import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./currency-transaction-history.css";
import { getAllCurrencyTransactionsHistory } from "../../requests";
//import Pagination from "../Pagination";

export default class CurrencyTransactionHistory extends Component {
  constructor() {
    super();
    this.state = { 
      currentPage: 1,
      countItems: 10,
      pageLimit: 2,
      transactions: []
    };
  }

  componentDidMount(leadId = "207AE0D0-D42E-4571-983A-02C7A312835D") {
    getAllCurrencyTransactionsHistory(leadId).then((response) => {
      this.setState({ transactions: response.data });
    });
    this.createItemCountList();
  }

  createItemCountList() {
    const list = [];
    for(let i = 1; i <= this.state.countItems; i++) {
        list.push(i)
    }
    return list;
 }

  render() {
    return (
      <div className="center">
        <h1 className="d-flex justify-content-center">
          Currency transaction history
        </h1>
        <div>
          {/* <Pagination
            itemsperpage={this.state.pageLimit}
            nocolumns={null}
            items={this.createItemCountList()}
            pagesspan={6}
            buttonClickHandler={this.buttonClick}
          >
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
          </Pagination> */}
        </div>
      </div>
    );
  }
}
