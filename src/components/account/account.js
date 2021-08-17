import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Account extends Component {
    constructor() {
      super();
      this.state = { walletUSD: [], user: [], totalBalance: 80, walletSystem: "d02472d3-27ba-4f12-9761-a8217a8035bf", token: "" };
    }

    componentDidMount() {
        
      }

      render() {
       return (
           <div className="container">
               <div className="account-userPhoto">ghj</div>
               <div className="account-userPhotoEdit">fgh</div>
               <div className="account-userName">dfg</div>
               <div className="account-userPassport">sdf</div>
               <div className="account-userEmail">asd</div>
               <div className="account-totalBalance">ert</div>
               <div className="account-editUserInfo">wer</div>
           </div>
       );
      }

}