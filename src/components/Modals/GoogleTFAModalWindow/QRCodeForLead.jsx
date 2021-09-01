import React, { Component, Fragment } from "react";
import { getQRcode } from "../../../requests";

class QRCodeForLead extends Component {
  state = {
    leadID: '1a0359d8-6618-4f94-be03-a9589bc1b43d',
    qrCodeBase64: "",
    stringKey: "",
  };

  componentDidMount() {
    getQRcode(this.state.leadID).then((response) => {
      this.setState({ qrCodeBase64: response.data.qrCodeBase64 });
      this.setState({ stringKey: response.data.manualEntryKey });
    });
  }

  render() {
    return (
      <div>
        <img
          src={`data:image/png;base64,${this.state.qrCodeBase64}`}
          width="200px"
          height="200px"
        />
        <input
          readOnly="true"
          name="Name"
          id="name"
          type="text"
          value={this.state.stringKey}
        ></input>
      </div>
    );
  }
}

export default QRCodeForLead;
