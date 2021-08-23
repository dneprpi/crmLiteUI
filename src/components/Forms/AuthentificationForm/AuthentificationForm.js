import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { singInUser } from "../../../requests";
import styles from "../style.module.css";

export default class SingINForm extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const object = {};

    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);

    singInUser(json)
      .then((answer) => {
        sessionStorage.setItem("leadid", answer.data.leadID);
        sessionStorage.setItem("token", answer.data.token);
        sessionStorage.setItem("isLogged", "true");
      })
      .then(() => this.setState({ redirect: true }));
  }

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.formBlock}>
        <h2 className={styles.formTitle}>Login form</h2>

        <form onSubmit={(e) => this.submitForm(e)}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className={styles.formControl}
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className={styles.formControl}
          />

          <div className={styles.bottomButtons}>
            <button type="submit" className={"btn " + styles.sendButton}>
              Sign in
            </button>

            <Link to="/register">
              <button className={"btn " + styles.sendButton}>Sign up</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
