import React, { Component } from "react";
import Countdown from "../src/components/Countdown.js";

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
        <div>
          <p>It's a boy?</p>
        </div>
        <div>
          <p>
            join us for a baby shower
            <br />
            honoring
          </p>
        </div>
        <div>
          <h2>Baby boy franken</h2>
        </div>
        <div>
          <p>Friday | October 13th | 4PM - 9PM</p>
        </div>
        <div>
          <p>
            The Great Zoom Network
            <br />
            RSVP to my super hot bestfriend 555-555-5555
            <br />
            June 16, 2020
          </p>
        </div>
        <div>
          <p>
            Registered @{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://tgt.gifts/babyboyfranken"
            >
              Target
            </a>
          </p>
        </div>
        <div>
          <Countdown date={`${year}-06-16T00:00:00`} />
          {/* <Countdown
        timeTillDate="05 18 2020, 6:30 am"
        timeFormat="MM DD YYYY, h:mm a"
        /> */}
        </div>
      </div>
    );
  }
}
export default App;
