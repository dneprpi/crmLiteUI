import React, { Component } from "react";
import { payPalDeposit, transStoreDeposit } from "../../requests";
import { v4 as uuidv4 } from "uuid";
import "./deposit.css";
import PaypalImg from "../../images/PayPalIcon.png";

export default class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletFrom: {},
      walletTo: {},
      id: String,
      operationType: String,
      timestamp: String,
      leadID: String,
      leadToken: String,
      isPayPal: Boolean,
    };
  }

  changePaymentMethod = (isPayPal) => {
    this.state.isPayPal = isPayPal;
  };

  submitForm(e) {
    e.preventDefault();

    const curDateTime = Date().toLocaleString();
    const formData = new FormData(e.target);
    formData.append("leadID", "da14ea70-e48f-43a1-ba98-b3aa96512be1");
    formData.append(this.id, uuidv4());
    formData.append(this.isPayPal, Date.now());
    const object = {};

    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);

    if (this.isPayPal) {
      payPalDeposit({ total: object.amount, leadID: object.leadID }).then(
        (response) => (window.location.href = response.data)
      );
    } else {
      transStoreDeposit(json).then((answer) => console.log(answer));
    }
  }

  render() {
    return (
      <section>
        <div>
          <h1>Deposit Page</h1>
        </div>
        <div>
          <div className="payment-menu">
            <button
              onClick={this.changePaymentMethod(true)}
              className="payment-menu"
            >
              <img className="icon-size" src={PaypalImg} />
            </button>
            <button
              onClick={this.changePaymentMethod(false)}
              className="payment-logo payment-menu"
            >
              <pre>TRANSSTORE </pre>
              <i className="fas fa-money-check-alt"></i>
            </button>
          </div>
          <form onSubmit={this.submitForm.bind(this)}>
            <div className="formGroup">
              <label htmlFor="Amount">Amount:</label>
              <input id="amount" name="amount" type="text" defaultValue="0" />
            </div>

            <button type="submit">Deposit</button>
          </form>
        </div>
      </section>
    );
  }
}
