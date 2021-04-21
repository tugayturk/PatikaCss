import React, { Component } from "react";
import "./PieChart.css"
import { IoSquare } from 'react-icons/io5'
import {AiTwotonePushpin} from "react-icons/ai"

export default class PieChart extends Component {
  render() {
    return (
      <div className="pieChart" >
        <h3 className="chartTitle">Average of Nutritional Value per Meal <AiTwotonePushpin /></h3>
       <div className="pieDiv">
        <div className="pie-container">
          <div className="pieGraph-breakfast"></div>
          <span className="meal">Breakfast</span>
        </div>
        <div className="pie-container">
          <div className="pieGraph-lunch"></div>
          <span className="meal">Lunch</span>
        </div>
        <div className="pie-container">
          <div className="pieGraph-dinner"></div>
          <span className="meal">Dinner</span>
        </div>
        </div>
       
        <p className="pieFooter"><IoSquare className="carbSq"/> carbs |<IoSquare className="fatSq"/> fat |<IoSquare className="proSq"/> pro</p>
    
      </div>
    );
  }
}
