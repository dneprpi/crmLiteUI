import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { singInUser } from "../../../requests";
import styles from "../style.module.css";

export default class SingINForm extends Component {
  constructor() {
    super();

    this.state = {
      fields: {},
      errors: {},
      redirect: false,
    };
  }

  submitForm(e) {
    e.preventDefault();

    if (!this.handleValidation()) return;

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

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.formBlock}>
        <h2 className={styles.formTitle}>Login form</h2>

        <form onSubmit={this.submitForm.bind(this)}>
          <div className={styles.formGroup}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              className={styles.formControl}
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className={styles.formControl}
              onChange={this.handleChange.bind(this, "password")}
              value={this.state.fields["password"]}
            />
          </div>
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
