import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css";
import { getUser } from "../../requests";
import photo from "../../images/usericon.png";

export default class userInfo extends Component {
  render() {
    const user = this.props.user;
    const totalbalance = this.props.totalbalance;
    return (
      <div class="container userinfo">
        <div class="row justify-content-center align-items-center">
          <div class="col-1"></div>
          <div class="col-2">
            <img src={photo} width="80%" height="80%" alt="user" />
          </div>
          <div class="col-4">
            <p className="userName">
              {user.firstName} {user.lastName}
            </p>
            <p className="passport">Passport : {user.passportNumber}</p>
            <p className="passport">TIN : {user.tin}</p>
            <p className="passport">E-mail : {user.email}</p>
            <p className="passport">Total Balance : {totalbalance} USD</p>
          </div>
          <div class="col-5">
            <i>TODO edit options</i>
          </div>
        </div>
      </div>
    );
  }
}
