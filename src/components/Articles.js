import React from "react";
import Frame from "../images/Frame-1.png";

function Articles() {
  return (
    <div>
      <section className="articles" id="articles">
        <div className="box-container">
          <div className="box" id="articles-box1">
            <a href="#" className="btn">
              Meditation
            </a>
            <div className="content">
              <p>How to fit a 10-minute meditation into your day, every day</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="box" id="articles-box2">
            <a href="#" className="btn">
              Meditation
            </a>
            <div className="content">
              <p>Trouble meditating? Here's advice for 17 common issues</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="box" id="articles-box3">
            <a href="#" className="btn">
              Meditation
            </a>
            <div className="content">
              <p>Simple ways to make meditation a daily habit</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="box" id="articles-box4">
            <a href="#" className="btn">
              Meditation
            </a>
            <div className="content">
              <p>How to beat the Sunday Scaries</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={Frame} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Articles;
