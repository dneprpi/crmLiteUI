import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createTransStoreTransaction } from "../../requests";
import { v4 as uuidv4 } from "uuid";
import "./withdraw.css"

export default class Withdraw extends Component {
    constructor() {
        super();
        this.state = { 
          walletFrom: {},
          walletTo: {},
          id: String,
          operationType: String,
          timestamp: String,
          leadID: String,
          leadToken: String,
        };
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
    let walletTo = {
      "id": "3fd3684e-dda4-4559-9094-677b9784b9fd",
      "currency": {
          "id": 1,
          "code": "USD",
          "title": "United States dollar"
      },
      "amount": 100221.000000
  };
    let walletFrom = {
      "id": "8488f45b-dd2f-41c2-87d4-d9161ea26cdb",
      "currency": {
          "id": 1,
          "code": "USD",
          "title": "United States dollar"
      },
      "amount": 1000000000.000000
  };
    let operationType = {
      "id": 2,
      "type": "withdraw"
  };
      console.log(operationType);
      const formData = new FormData(e.target);
      const object = {};
  
      formData.forEach((value, key) => (object[key] = value));
      object["LeadID"] = leadid;
      object["ID"] = uuidv4();
      object["Timestamp"] = curDateTime;
      object["OperationType"] = operationType[2];
      object["WalletFrom"] = walletFrom;
      object["WalletTo"] = walletTo;
      console.log(object);
      const json = JSON.stringify(object);
      console.log(json);

      createTransStoreTransaction({data:json, token: leadToken}).then((answer) => console.log(answer));
    }

  render() {
    return (
      <section>
        <div className="margin d-flex justify-content-center">
          <h1>Withdraw Page</h1>
        </div>
        <div>
          <form onSubmit={this.submitForm}>
            <div className="margin d-flex justify-content-center">
              <label htmlFor="Amount">Amount:</label>
              <div className="divider"/>
              <input type="number" min="1" id="Amount" name="Amount" defaultValue="1" />
            </div>
            <div className="margin d-flex justify-content-center">
            <Link to="/currency">
                <button className="btn btn-inline-primary">Back</button>
            </Link>
            <button className="btn btn-primary" type="submit">Withdraw</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
