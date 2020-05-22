import React, { Component } from "react";
import Countdown from "../src/components/Countdown.js";
import Modal from "../src/components/Modal";
// import forest from "../src/images/forest.jpg";
// import forest1 from "../src/images/forest1.jpg";

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
        <div
          style={{ paddingBottom: "0", marginBottom: "0" }}
          className="the-countdown"
        >
          <Countdown date={`${year}-08-05T17:00:00`} />
          <span style={{ fontSize: "2.3rem" }}>to</span>
        </div>
        <div className="body">
          <div>
            <h1 className="baby-name">Baby Boy Franken</h1>
          </div>
          <div className="true-body">
            <div className="date">
              <p>Saturday | June 27 | 4PM - 9PM</p>
            </div>
            <div>
              <p className="location">
                The Great Zoom Network
                <br />
                RSVP to Amy @ [number on invite] by
                <br />
                June 6, 2020
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
          <div className="footer">
            <footer style={{ fontSize: ".3rem" }}>
              <a href="https://www.freepik.com/free-photos-vectors/frame">
                Background design
              </a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
