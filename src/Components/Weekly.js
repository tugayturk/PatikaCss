import React, { Component } from "react";
import "./Weekly.css";
import {AiTwotonePushpin} from "react-icons/ai"

export default class Weekly extends Component {
  render() {
    return (
      <div className="weekly">
          <p className="weeklyTitle">Weekly Goal Achieved <AiTwotonePushpin/></p>
        <div className="boxWeekly">
          <div className="containerWeekly"><span className="percentage-Carbs"></span></div>
          <div className="containerWeekly"><span className="percentage-Pro"></span></div>
          <div className="containerWeekly"><span className="percentage-Fat"></span></div>
          <div className="containerWeekly"><span className="percentage-Water"></span></div>
          <div className="containerWeekly"><span className="percentage-Exer"></span></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
        </div>
      </div>
    );
  }
}
