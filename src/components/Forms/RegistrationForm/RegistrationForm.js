import React, { Component } from "react";
import { registerLead } from "../../../requests";
import styles from "../style.module.css";
import { Redirect } from "react-router-dom";

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
      redirect: false,
      message: "",
    };
  }

  submitForm(e) {
    e.preventDefault();

    if (!this.handleValidation()) return;

    const formData = new FormData(e.target);
    const object = {};

    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);

    registerLead(json).then((answer) => {
      this.setState({
        message: answer.data.message,
      });

      setTimeout(
        () => this.setState({ redirect: answer.data.isConfirmed }),
        5000
      );
    });
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    //firstName
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Only letters";
      }
    }

    //lastName
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastName"] = "Only letters";
      }
    }

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

    //passportNumber
    if (!fields["passportNumber"]) {
      formIsValid = false;
      errors["passportNumber"] = "Cannot be empty";
    }

    //tin
    if (!fields["tin"]) {
      formIsValid = false;
      errors["tin"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/sign-in" />;
    }
    return (
      <div className={styles.formBlock}>
        <h2 className={styles.formTitle}>Registration form</h2>

        <form onSubmit={this.submitForm.bind(this)}>
          <div className={styles.formGroup}>
            <input
              placeholder="Firstname"
              name="firstName"
              type="text"
              className={styles.formControl}
              onChange={this.handleChange.bind(this, "firstName")}
              value={this.state.fields["firstName"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["firstName"]}
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="Lasttname"
              name="lastName"
              type="text"
              className={styles.formControl}
              onChange={this.handleChange.bind(this, "lastName")}
              value={this.state.fields["lastName"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["lastName"]}
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="E-mail"
              name="email"
              type="email"
              className={styles.formControl}
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
            />
            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="Password"
              name="password"
              type="password"
              className={styles.formControl}
              onChange={this.handleChange.bind(this, "password")}
              value={this.state.fields["password"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["password"]}
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="Pasport number"
              name="passportNumber"
              type="text"
              className={styles.formControl}
              onChange={this.handleChange.bind(this, "passportNumber")}
              value={this.state.fields["passportNumber"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["passportNumber"]}
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="Tin"
              name="tin"
              type="text"
              className={styles.formControl}
              onChange={this.handleChange.bind(this, "tin")}
              value={this.state.fields["tin"]}
            />
            <span style={{ color: "red" }}>{this.state.errors["tin"]}</span>
          </div>

          <div className={styles.bottomButtons}>
            <button type="submit" className={"btn " + styles.sendButton}>
              Send
            </button>
          </div>
        </form>

        <div>{this.state.message}</div>
      </div>
    );
  }
}
