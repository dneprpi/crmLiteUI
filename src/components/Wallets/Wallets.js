import React, { Component } from "react";

export default class Wallets extends Component {
  constructor() {
    super();
    this.state = { wallets: [], currencyBuy: "" };
  }

  componentDidMount(leadId = "acdb8541-1619-4ef5-82e3-76f64514d2db") {
    fetch(`http://localhost:5050/api/wallet/leadid?leadId=${leadId}`)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log(body);
        this.setState({
          wallets: body,
        });
      });
  }

  validateCurrency = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, function () {
      console.log(this.state);
    });
  };

  render() {
    const encodedBase64 =
      "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";
    return (
      <section>
        <h1>Products List</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.wallets.map((w, index) => {
                return (
                  <tr key={index}>
                    <td> {w.currency}</td>
                    <td>{w.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <img
            src={`data:image/png;base64,${encodedBase64}`}
            width="200px"
            height="200px"
          />
        </div>
        <div>
          <select
            name="currencyBuy"
            onChange={this.validateCurrency}
            className="form-control"
            value={this.state.currencyBuy}
          >
            <option value="">Buy currency</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="RUB">RUB</option>
          </select>
        </div>
      </section>
    );
  }
}