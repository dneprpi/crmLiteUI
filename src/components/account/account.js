import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css";
import { getUser } from "../../requests";
import photo from "../../images/usericon.png";
import Userinfo from "./userInfo";
import SingINForm from "../Forms/AuthentificationForm/AuthentificationForm";
import { Redirect } from "react-router-dom";

export default class Account extends Component {
  constructor() {
    super();

    this.state = {
      walletUSD: [],
      user: [],
      totalbalance: 80,
      walletSystem: "d02472d3-27ba-4f12-9761-a8217a8035bf",
      token: "",
      leadID: sessionStorage.getItem("leadid"),
    };
  }

  componentDidMount() {
    getUser(this.state.leadID).then((res) => {
      const lead = res.data;
      this.setState({ user: lead });
    });
  }

  render() {
    if (sessionStorage.getItem("isLogged") == "true")
      return (
        <Userinfo
          user={this.state.user}
          totalbalance={this.state.totalbalance}
        />
      );
    return <Redirect to="/sign-in" />;
  }
}
