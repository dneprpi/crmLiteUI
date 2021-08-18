import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./account.css";

export default class Account extends Component {
    constructor() {
      super();
      this.state = { walletUSD: [], user: [], totalBalance: 80, walletSystem: "d02472d3-27ba-4f12-9761-a8217a8035bf", token: "" };
    }

    componentDidMount() {
        
      }

      render() {
       return (
           <div class="container">
               <div class = "row justify-content-center align-items-center">
                 <div class = "col">
                  111
                 </div>
                 <div class = "col">
                  222
                 </div>
                 <div class = "col">
                  333
                 </div>
               </div>
               <div class = "row justify-content-center align-items-center">
                 <div class = "col">
                  444
                 </div>
                 <div class = "col">
                  555
                 </div>
                 <div class = "col">
                  666
                 </div>
               </div>
           </div>
       );
      }

}