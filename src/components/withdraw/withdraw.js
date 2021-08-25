import React, { Component } from "react";
import { payPalDeposit } from "../../requests";

export default class Deposit extends Component {
    constructor() {
        super();
        this.state = { 
            leadWallet: {},
            sysWallet: {},
            leadID: String,
            leadToken: String,
        };
    }

  submitForm(e) {
    e.preventDefault();

    const curDateTime = Date().toLocaleString();
    const formData = new FormData(e.target);
    formData.append('leadID',"da14ea70-e48f-43a1-ba98-b3aa96512be1");
    const object = {};
    
    formData.forEach((value, key) => (object[key] = value));
    payPalDeposit({total: object.amount, leadID: object.leadID});
  }

  render() {
    return (
      <section>
        <div>
          <h1>Withdraw Page</h1>
        </div>
        <div>
          <form onSubmit={this.submitForm}>
            <div className="formGroup">
              <label htmlFor="Amount">Amount:</label>
              <input id="amount" name="amount" type="text" defaultValue="0" />
            </div>

            <button type="submit">Withdraw</button>
          </form>
        </div>
      </section>
    );
  }
}
