import React, { Component } from "react";
import Calendar from "./Calendar";
import "./Navbar.css";
import "./Calendar.css";
import user from "../images/tgy.jpg";
import { FiGift } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { FcSearch } from "react-icons/fc";
import logo from "../images/comfortzone.png";

export default class Navbar extends Component {
  state={
    toastClass:"toastDisplay",
    exitScreen:"exitDisplay",
  }
  changeToastDisplay=() => {
    this.setState({
      toastClass:"toast"
    })
  }
  changeExitDisplay=() => {
    this.setState({
      exitScreen:"exitScreen"
    })
  }
  render() {
    return (
      <div className="Navbar">
        <Calendar />
        <div className="inputDiv">
          <input placeholder="Search"></input>
          <FcSearch className="searchIcon" />
        </div>
        <img className="navLogo " src={logo} alt="logo"></img>
        <div className="profileInfo">
          <div className="info">
            <FiGift className="icons" onClick={this.changeToastDisplay} />
            <GrNotification className="icons" />
            <BiExit className="icons" onClick={this.changeExitDisplay} />
            <img className="profilePic pic-2" src={user} alt="user"></img>|
            Tugay TÜRK
          </div>
        </div>
          
          <div className={this.state.toastClass}>
            There is nothing in your gift store
          <button className="toastButton" onClick={()=>{
            this.setState({
              toastClass:"toastDisplay"
            })
          }}>x</button>
          </div>
          
         <div className={this.state.exitScreen}>
          <p className="warning">ARE YOU SURE YOU WANT TO EXİT?</p>
          <div className="buttonDiv"><button className="exitButton">Yes</button>
          <button className="exitButton" onClick={()=>{
            this.setState({
              exitScreen:"exitDisplay"
            })
          }}>No</button>
         </div>
         </div>
      </div>
    );
  }
}
