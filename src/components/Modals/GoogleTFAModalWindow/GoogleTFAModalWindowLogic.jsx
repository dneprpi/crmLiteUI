import React, { Component, Fragment } from "react";
import Modal from "../BaseModalWindow/Modal";
import QRCode from "./QRCodeForLead";
import { connectTFAToLead } from "../../../requests";
import "./GoogleTFAModal.css";

class GoogleTFAModalWindowLogic extends Component {
  state = {
    leadID: "1a0359d8-6618-4f94-be03-a9589bc1b43d",
    isOpen: false,
    isConnectTFA: false,
    inputValue: "",
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  handleConfirmPin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const object = {};

    formData.forEach((value, key) => (object[key] = value));

    connectTFAToLead(object.Input_Pin, this.state.leadID).then((response) => {
      this.setState({ isConnectTFA: response.data });

      if(this.state.isConnectTFA){
        this.setState({ isOpen: false });
      }
    });
  };

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.openModal}>GoogleTFA</button>
        <Modal isOpen={this.state.isOpen}>
          <div className="container">
            <p>Setup Google Authenticator</p>
            <div className="row">
              <div className="col">
                <div class="align-self-center">
                  <p>
                    {" "}
                    Get the authenticator app from the Google Play Store
                    (Android) or ITunes App Store (IOS)
                  </p>
                </div>
              </div>
              <div className="col">
                <div class="align-self-center">
                  <p>Choose scan a barcode</p>
                </div>
              </div>
              <div className="col">
                <p>
                  Set up authenticator. Enter the six-digit code that you see in
                  the app.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Google_Authenticator_for_Android_icon.svg/2048px-Google_Authenticator_for_Android_icon.svg.png"
                  height="200"
                />
              </div>
              <div className="col">
                <QRCode leadID ={this.state.leadID}/>
              </div>
              <div className="col">
                <form onSubmit={this.handleConfirmPin}>
                  <input
                    name="Input_Pin"
                    id="pin"
                    type="text"
                    pattern="[0-9]{6}"
                    maxLength="6"
                    required
                    placeholder="Enter code"
                  />
                  <button type="submit" >Send</button>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="https://apps.apple.com/us/app/google-authenticator/id388497605"
                  target="_blank"
                >
                  <button className="btn border border-primary">
                    App Store
                  </button>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=uk&gl=US"
                  target="_blank"
                >
                  <button className="btn border border-primary">
                    Play Market
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default GoogleTFAModalWindowLogic;
