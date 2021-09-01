import React, { Component } from "react";
import "./account.css";
import photo from "../../images/usericon.png";
import GoogleTFAModalWindowLogic from "../Modals/GoogleTFAModalWindow/GoogleTFAModalWindowLogic";

export default class userInfo extends Component {
  render() {
    const user = this.props.user;
    const totalbalance = this.props.totalbalance;
    return (
      <div className="container userinfo">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <img src={photo} width="80%" height="80%" alt="user" />
          </div>
          <div className="col">
            <p className="userName">
              {user.firstName} {user.lastName}
            </p>
            <p className="passport">Passport : {user.passportNumber}</p>
            <p className="passport">TIN : {user.tin}</p>
            <p className="passport">E-mail : {user.email}</p>
            <p className="passport">Total Balance : {totalbalance} USD</p>
          </div>
          <div className="col">
            <i>TODO edit options</i>
          </div>
        </div>
        <div>
          <GoogleTFAModalWindowLogic />
        </div>
      </div>
    );
  }
}
