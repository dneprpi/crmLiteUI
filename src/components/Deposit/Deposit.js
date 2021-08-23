import axios from "axios";
import React, { Component } from "react";
import { payPalDeposit } from "../../requests";

export const redirect = ()=>{
  return axios({
    method: 'post',
    baseURL: 'https://localhost:5050',
    url: '/api/paypal/checkout',
    headers: {
      'Content-Type': 'application/json'
      //"access-Control-Allow-Origin"
    }
  });
};

const redir = ()=> {
  redirect().then((response)=>{
    console.log(response.data);
    window.location.href=response.data;
  });
};

export default class Deposit extends Component {
  submitForm(e) {
    e.preventDefault();

    const curDateTime = Date().toLocaleString();
    const formData = new FormData(e.target);
    formData.append('leadID',"da14ea70-e48f-43a1-ba98-b3aa96512be4");
    const object = {};
    
    formData.forEach((value, key) => (object[key] = value));
    payPalDeposit({total: object.amount, leadID: object.leadID}).then(value=>window.location.href=value.data);
  }
  
  render() {
    return (
      <section>
        <div>
          <h1>Deposit Page</h1>
        </div>
        <div>
          <form onSubmit={this.submitForm}>
            <div className="formGroup">
              <label htmlFor="Amount">Amount:</label>
              <input id="amount" name="amount" type="text" defaultValue="0" />
            </div>

            <button type="submit" >Deposit</button>

          </form>
        </div>
      </section>
    );
  }
}
