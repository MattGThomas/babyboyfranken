import React, { Component } from "react";
import "../App.css";
class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }
  componentDidMount() {
    // this allows it to update ever second
    this.interval = setInterval(() => {
      const date = this.calcCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }
  componentWillUnmount() {
    this.stop();
  }
  calcCountdown(endDate) {
    let dif = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // stop countdown when the date is reached
    if (dif <= 0) {
      return false;
    }
    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      //   millisec: 0,
    };

    // get time difference between now and expected date
    if (dif >= 365.25 * 86400) {
      timeLeft.years = Math.floor(dif / (365.25 * 86400));
      dif -= timeLeft.years * 365.25 * 86400;
    }
    if (dif >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(dif / 86400);
      dif -= timeLeft.days * 86400;
    }
    if (dif >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(dif / 3600);
      dif -= timeLeft.hours * 3600;
    }
    if (dif >= 60) {
      timeLeft.min = Math.floor(dif / 60);
      dif -= timeLeft.min * 60;
    }
    timeLeft.sec = dif;
    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(val) {
    val = String(val);
    while (val.length < 2) {
      val = "0" + val;
    }
    return val;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="countdown-timer">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.days)}</strong>
            <span>{countDown.days === 1 ? "Day" : "Days"} </span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
            <span>Hours </span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>Mins </span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>Secs </span>
          </span>
        </span>
      </div>
    );
  }
}
//   state = {
//     days: undefined,
//     hours: undefined,
//     minutes: undefined,
//     seconds: undefined,
//   };

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       const { timeTillDate, timeFormat } = this.props;
//       const then = moment(timeTillDate, timeFormat);
//       const now = moment();
//       const countdown = moment(then - now);
//       const days = countdown.format("D");
//       const hours = countdown.format("HH");
//       const minutes = countdown.format("mm");
//       const seconds = countdown.format("ss");

//       this.setState({
//         days,
//         hours,
//         minutes,
//         seconds,
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     if (this.interval) {
//       clearInterval(this.interval);
//     }
//   }

//   render() {
//     const { days, hours, minutes, seconds } = this.state;

//     return (
//       <div>
//         <h2>Due Date Countdown</h2>
//         <div className="countdown-wrapper">
//           <div className="countdown-item">
//             {days}
//             <span>days</span>
//           </div>
//           <div className="countdown-item">
//             {hours}
//             <span>hours</span>
//           </div>
//           <div className="countdown-item">
//             {minutes}
//             <span>minutes</span>
//           </div>
//           <div className="countdown-item">
//             {seconds}
//             <span>seconds</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Countdown;
