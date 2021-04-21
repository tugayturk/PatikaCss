import React, { Component } from "react";
import "./PersonMeasure.css";
import heart from "../images/heart.png";
import bmr from "../images/bmr.png";
import bodyfat from "../images/bodyfat.png";
import bodytype from "../images/bodytype.png";

export default class PersonMeasure extends Component {
  render() {
    return (
      <div className="measure">
       
        <div className="personalInfo">
        <div className="info-1">
           <div className="gender">Gender<div className="userMale">Male</div></div>
              <div className="age">Age<div className="userAge">25</div></div>
                    </div>
      <div className="info-2">
           <div className="weight">Weight<div className="userWeight">80kg</div></div>
          <div className="height">Height<div className="userHeight">185cm</div></div>
            </div>
        </div>
        

        <div className="measuresInfo bmi">
          <div className="bmiLogo">
            <img className="Logo" src={heart} alt="heart"></img>
          </div>
          <div className="bmiText">
            <div className="measureTitle" style={{color:"#E46565", fontWeight:"bold"}}>BMI:</div>
            <div className="measurements">25kg/m²</div>
          </div>
        </div>

        <div className="measuresInfo bmr">
          <div className="bmrLogo">
            <img className="Logo" src={bmr} alt="bmr"></img>
          </div>
          <div className="bmrText">
            <div className="measureTitle" style={{color:"turquoise", fontWeight:"bold"}}>BMR:</div>
            <div className="measurements">2100Kcal</div>
          </div>
        </div>

        <div className="measuresInfo bodyFat">
          <div className="bfLogo">
            <img className="Logo" src={bodyfat} alt="bodyFat"></img>
          </div>
          <div className="bfText">
            <div className="measureTitle" style={{color:"#F5C543", fontWeight:"bold"}}>Body Fat:</div>
            <div className="measurements">15%</div>
          </div>
        </div>

        <div className="measuresInfo bodyType">
          <div className="bodyLogo">
            <img className="Logo" src={bodytype} alt="bodytype"></img>
          </div>
          <div className="bodyText">
            <div className="measureTitle" style={{color:"#21EC21", fontWeight:"bold"}}>Type:</div>
            <div className="measurements"> Hourglass</div>
          </div>
        </div>
      </div>
    );
  }
}
