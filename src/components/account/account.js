import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css";
import { getUser } from "../../requests";
import photo from "../../images/usericon.png";
import Userinfo from "./userInfo";
import SingINForm from "../Forms/AuthentificationForm/AuthentificationForm";

export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      walletUSD: [],
      user: [],
      totalbalance: 80,
      walletSystem: "d02472d3-27ba-4f12-9761-a8217a8035bf",
      token: "",
      leadID: "",
    };
  }
  handleToUpdate = (userData) => {
    alert("We pass user data from sign in to account: " + userData);
    this.setState({ user: userData });
    this.setState({ leadID: userData.id });
    console.log(this.state);
  };
  componentDidMount() {
    getUser(this.state.leadID).then((res) => {
      const lead = res.data;
      this.setState({ user: lead });
    });
  }

  render() {
    if (this.state.leadID !== "") {
      return (
        <Userinfo
          user={this.state.user}
          totalbalance={this.state.totalbalance}
        />
      );
    } else {
      return <SingINForm handleToUpdate={this.handleToUpdate} />;
    }
  }
}
