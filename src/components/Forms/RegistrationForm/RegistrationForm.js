import React, { Component } from "react";
import { registerUser } from "../../../requests";
import styles from '../style.module.css';

export default class RegistrationForm extends Component {
  submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const object = {};

    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);

    registerUser(json).then((answer) => console.log(answer));
  }

  render() {
    return (
      <div className={ styles.formBlock }>
        <h2 className={ styles.formTitle }>Registration form</h2>

        <form onSubmit={this.submitForm}>
          <div className="formGroup">
            <input
              placeholder="Firstname"
              name="firstName"
              type="text"
              className={ styles.formControl }
            />
          </div>
          <div className="formGroup">
            <input
              placeholder="Lasttname"
              name="lastName"
              type="text"
              className={ styles.formControl }
            />
          </div>
          <div className="formGroup">
            <input
              placeholder="E-mail"
              name="email"
              type="email"
              className={ styles.formControl }
            />
          </div>
          <div className="formGroup">
            <input
              placeholder="Password"
              name="password"
              type="password"
              className={ styles.formControl }
            />
          </div>
          <div className="formGroup">
            <input
              placeholder="Pasport number"
              name="passportNumber"
              type="text"
              className={ styles.formControl }
            />
          </div>
          <div className="formGroup">
            <input 
              placeholder="Tin" 
              name="tin" 
              type="text" 
              className={ styles.formControl }
            />
          </div>

          <div className={ styles.bottomButtons }>
            <button type="submit" className={ 'btn ' + styles.sendButton }>
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}
