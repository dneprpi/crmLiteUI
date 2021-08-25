import React, { Component } from "react";
import { Link } from "react-router-dom";
import { payPalDeposit, createTransStoreTransaction } from "../../requests";
import { v4 as uuidv4 } from "uuid";
import "./deposit.css";

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
    
    this.selectPaypal = this.selectPaypal.bind(this);
    this.selectTransStore = this.selectTransStore.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    let curDateTime = (new Date()).toJSON();
    /* let leadid = JSON.parse(sessionStorage.getItem('leadid'));
    let leadToken = JSON.parse(sessionStorage.getItem('token'));
    let walletFrom = JSON.parse(sessionStorage.getItem('SysWallet'));
    let walletTo = JSON.parse(sessionStorage.getItem('USDWallet')); */
    let leadid = "3fd3684e-dda4-4559-9094-677b9784b8fd";
    let leadToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVXNlciIsInVuaXF1ZV9uYW1lIjoiM2ZkMzY4NGUtZGRhNC00NTU5LTkwOTQtNjc3Yjk3ODRiOGZkIiwibmJmIjoxNjI5OTg5ODQ5LCJleHAiOjE2MzA1OTQ2NDksImlhdCI6MTYyOTk4OTg0OX0.kdxb1Ph9CHVEpYF_wSLn5MwJNum_c47jmy5wNkEZo2A";
    let walletFrom = {
      "id": "3fd3684e-dda4-4559-9094-677b9784b9fd",
      "currency": {
          "id": 1,
          "code": "USD",
          "title": "United States dollar"
      },
      "amount": 100221.000000
  };
    let walletTo = {
      "id": "8488f45b-dd2f-41c2-87d4-d9161ea26cdb",
      "currency": {
          "id": 1,
          "code": "USD",
          "title": "United States dollar"
      },
      "amount": 1000000000.000000
  };
    let operationType = {
      "id": 1,
      "type": "deposit "
  };
    const formData = new FormData(e.target);
    const object = {};

    formData.forEach((value, key) => (object[key] = value));
    object["LeadID"] = leadid;
    object["ID"] = uuidv4();
    object["Timestamp"] = curDateTime;
    object["OperationType"] = operationType[0];
    object["WalletFrom"] = walletFrom;
    object["WalletTo"] = walletTo;
    console.log(object);
    const json = JSON.stringify(object);
    console.log(json);

    if (this.state.isPayPal) {
      payPalDeposit({ total: object.Amount, leadID: object.LeadID, token: leadToken})
      .then((response) => (window.location.href = response.data));
    } else {
      createTransStoreTransaction({data:json, token: leadToken}).then((answer) => console.log(answer));
    }
  }

  selectPaypal() {
    this.state.isPayPal = true;
    console.log(this.state.isPayPal);
  }

  selectTransStore() {
    this.state.isPayPal = false;
    console.log(this.state.isPayPal);
  }

  render() {
    return (
      <div className>
        <div className="margin">
          <h1 className="d-flex justify-content-center">Deposit Page</h1>
        </div>
        <div>
          <div className="margin d-flex justify-content-center">
            <input onClick={this.selectPaypal} type="radio" className="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked/>
            <label className="btn btn-outline-primary" for="success-outlined">PayPal</label>
            <div className="divider"/>
            <input onClick={this.selectTransStore} type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"/>
            <label className="btn btn-outline-primary" for="danger-outlined">TRANSSTORE</label>
          </div>

          <form onSubmit={this.submitForm.bind(this)}>
            <div className="margin d-flex justify-content-center">
              <label htmlFor="Amount"> Amount:</label>
              <div className="divider"/>
              <input type="number" min="1" id="Amount" name="Amount" defaultValue="1" />
            </div>
            <div className="margin d-flex justify-content-center">
              <Link to="/currency">
                <button className="btn btn-inline-primary">Back</button>
              </Link>
              <button className="btn btn-primary" type="submit">Deposit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
