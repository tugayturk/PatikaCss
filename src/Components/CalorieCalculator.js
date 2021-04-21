import React, { Component } from "react";
import "./CircleBar.css";
import "./CalorieCalculator.css";
import { AiTwotonePushpin } from "react-icons/ai";
export default class CalorieCalculator extends Component {
  render() {
    return (
      <div className="calculator">
        <span className="calculatorTitle">
          Daily Calorie Calculator <AiTwotonePushpin />
        </span>
        <br />
        <span className="calLeft">
          <strong>1435 kCal left</strong>
        </span>
        <div className="nutrCalculator">
          <div className="types">
            <div className="circs">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="40" cy="40" r="40"></circle>
                    <circle cx="40" cy="40" r="40"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      87<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <span className="foodTypes">Carbs</span>
            <span className="total">70g Left</span>
          </div>

          <div className="types">
            <div className="circs">
              <div className="box">
                <div className="percent type-1">
                  <svg>
                    <circle cx="40" cy="40" r="40"></circle>
                    <circle cx="40" cy="40" r="40"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      48<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <span className="foodTypes">Proteins</span>{" "}
            <span className="total">80g Left</span>
          </div>

          <div className="types">
            <div className="circs">
              <div className="box">
                <div className="percent type-2">
                  <svg>
                    <circle cx="40" cy="40" r="40"></circle>
                    <circle cx="40" cy="40" r="40"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      29<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <span className="foodTypes">Fats</span>{" "}
            <span className="total">20g Left</span>
          </div>
        </div>
      </div>
    );
  }
}
