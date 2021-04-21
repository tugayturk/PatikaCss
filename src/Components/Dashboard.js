import React, { Component } from "react";
import "./Dashboard.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { RiSettings5Line } from "react-icons/ri";
import logo from "../images/logo2.png";

export default class Dashboard extends Component {
  state = {
    className: "modalDisplay",
    nutritionClass: "nutritionOptionDisplay",
  };
  changePtDisplay = () => {
    this.setState({
      className: "modal",
    });
  };
  changeNutritionDisplay = () => {
    this.setState({
      nutritionClass: "nutritionOption",
    });
  };
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="ullist">
            <div className="list1">
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboard
            </div>
            <div className="list2">
              <span className="icon">
                <IoFastFoodOutline />{" "}
              </span>
              Meals
            </div>
            <div className="list3">
              <span className="icon">
                <CgGym />
              </span>
              Training
            </div>
            <div className="list">
              <span className="icon">
                <GrAchievement />
              </span>
              Achievements
            </div>
            <div className="list">
              <span className="icon">
                <VscAccount />
              </span>
              User Account
            </div>
            <div className="list">
              <span className="icon">
                <RiSettings5Line />
              </span>
              Settings
            </div>
          </div>
          <div className="membership">
            <h3 className="extend">Extend Your Membership With :</h3>
            <button className="buttonTrainer" onClick={this.changePtDisplay}>
              Personal Trainer
            </button>
            <h4>or</h4>
            <button
              className="buttonNutr"
              onClick={this.changeNutritionDisplay}
            >
              Nutritionist
            </button>
          </div>

          <div className={this.state.className}>
            <div className="modalDesign">
              <button className="options">1 Month Membership = 30$</button>
              <button className="options">6 Months Membership = 150$</button>
              <button className="options">Yearly Membership = 250$</button>
              <button
                className="closeButton"
                onClick={() => {
                  this.setState({
                    className: "modalDisplay",
                  });
                }}
              >
                x
              </button>
            </div>
          </div>
          <div className={this.state.nutritionClass}>
            <div className="modalDesign">
              <button className="options">1 Month Membership = 30$ </button>
              <button className="options">6 Months Membership = 150$</button>
              <button className="options">Yearly Membership = 250$</button>
              <button
                className="closeButton"
                onClick={() => {
                  this.setState({
                    nutritionClass: "nutritionOptionDisplay",
                  });
                }}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
