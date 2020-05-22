import React, { Component } from "react";
import Countdown from "../src/components/Countdown.js";
import Modal from "../src/components/Modal";
import forest from "../src/images/forest.jpg";
import forest1 from "../src/images/forest1.jpg";

import "./App.css";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 4 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div className="App">
        {/* <div style={{ background: "#89cff0" }} className="header">
          <div>
            
          </div>
          {/* <div>
            <Countdown date={`${year}-05-21T21:00:00`} />
          </div> */}
        {/* <div className="whole-card"> */}
        {/* <div className="card text-center"> */}
        <div className="body">
          <div>
            <h1 className="baby-name">Baby Boy Franken</h1>
          </div>
          <div className="true-body">
            <div className="date">
              <p>Friday | October 13th | 4PM - 9PM</p>
            </div>
            <div>
              <p className="location">
                The Great Zoom Network
                <br />
                RSVP to Amy @ 555-555-5555 by
                <br />
                June 16, 2020
              </p>
            </div>
            <p style={{ color: "white" }}>
              Registered @{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://tgt.gifts/babyboyfranken"
                style={{ color: "white" }}
              >
                Target
              </a>
            </p>
            <div className="zoom-info">
              <p>
                for those of you joining us via Zoom, <br />
                click the link below
              </p>
              <Modal />
            </div>
            {/* <div className="card-footer"> */}

            {/* </div> */}
          </div>
          <footer className="text-left" style={{ fontSize: ".3rem" }}>
            <a href="https://www.freepik.com/free-photos-vectors/design">
              Background design
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
export default App;
