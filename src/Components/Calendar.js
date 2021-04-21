import React, { Component } from "react";
import "./Calendar.css";
import {AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
       <div className="title">
        <h3>Calendar</h3><FcCalendar className="calendarIcon"/>
        </div>
        <div className="schedule">
          <AiFillCaretLeft className="directionIcon"/>
          <div className="day">
            Mon<span>12</span>
            <span><MdDone className="doneIcon"/></span>
          </div>
          <div className="day">
            Tue<span>13</span>
            <span ><MdDone className="doneIcon"/></span>
          </div>
          <div className="day today">
           <span className="pickedDay">Wed</span> <span className="date">14</span>
          </div>
          <div className="day">
            Thu<span>15</span>
          </div>
          <div className="day">
            Fri<span>16</span>
          </div>
          <div className="day">
            Sat<span>17</span>
          </div>
          <div className="day">
            Sun<span>18</span>
          </div>
          <AiFillCaretRight className="directionIcon" />
        </div>
      </div>
    );
  }
}
