import React, { Component } from "react";

export default class Deposit extends Component {
  submitForm(e) {
    e.preventDefault();

    const curDateTime = Date().toLocaleString();
    const formData = new FormData(e.target);
    formData.append('Timestamp',curDateTime);
    const object = {};
    
    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);
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
              <label htmlFor="Deposit">Amount:</label>
              <input id="amount" name="amount" type="text" defaultValue="0" />
            </div>

            <button type="submit">Deposit</button>
          </form>
        </div>
      </section>
    );
  }
}
