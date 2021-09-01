import React, { Component } from "react";
import { getUser } from "../../requests";
import Userinfo from "./userInfo";
import { Redirect } from "react-router-dom";

export default class Account extends Component {
  constructor() {
    super();

    this.state = {
      walletUSD: [],
      user: {},
      totalbalance: 80,
      walletSystem: "d02472d3-27ba-4f12-9761-a8217a8035bf",
      token: sessionStorage.getItem("token"),
      leadID: sessionStorage.getItem("leadid"),
    };
  }

  componentDidMount() {
    getUser(this.state.leadID, this.state.token).then((res) => {
      const lead = res.data;
      this.setState({ user: lead });
    }).then(console.log(this.state));
  }

  render() {
    if (sessionStorage.getItem("isLogged") === "true")
      return (
        <Userinfo
          user={this.state.user}
          totalbalance={this.state.totalbalance}
        />
      );
    return <Redirect to="/sign-in" />;
  }
}
