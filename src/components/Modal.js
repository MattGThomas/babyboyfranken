import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

class Modal extends Component {
  state = {
    modal8: false,
    // modal9: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="info" onClick={this.toggle(8)}>
          Zoom Instructions
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="right"
        >
          <MDBModalHeader toggle={this.toggle(8)}>
            Zoom Instructions
          </MDBModalHeader>
          <MDBModalBody>
            <div className="text-left">
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kellerisd.zoom.us/j/98437991247"
                >
                  Click here to join the fun
                </a>
              </p>
              <strong>
                Meeting ID: 984 3799 1247 <br />
              </strong>
              <strong>Password: Please RSVP with Amy for password</strong>
              <br />
              <br />
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.zoom.us/hc/en-us/articles/201362193-How-Do-I-Join-A-Meeting-"
                >
                  <strong>Zoom FAQs</strong>
                </a>
              </p>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(8)}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;
