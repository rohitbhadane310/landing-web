import React from "react";
import more1 from "../images/more1.png";
import more2 from "../images/more2.png";
import more3 from "../images/more3.png";
import more4 from "../images/more4.png";

function Mindfulness() {
  return (
    <>
      <section className="Mindfulness" id="Mindfulness">
        <div className="moreArticles" id="moreArticles">
          <h1 className="heading">More articles from Headspace</h1>
          <div className="box-container">
            <div className="box" id="moreArticles-box1">
              <img src={more1} alt="" />
              <div className="content">
                <h3>Meditation</h3>
                <p>View all -</p>
              </div>
            </div>
            <div className="box" id="moreArticles-box2">
              <img src={more2} alt="" />
              <div className="content">
                <h3>Sleep</h3>
                <p>View all -</p>
              </div>
            </div>
            <div className="box" id="moreArticles-box3">
              <img src={more3} alt="" />
              <div className="content">
                <h3>Stress</h3>
                <p>View all -</p>
              </div>
            </div>
            <div className="box" id="moreArticles-box4">
              <img src={more4} alt="" />
              <div className="content">
                <h3>Mindfulness</h3>
                <p>View all -</p>
              </div>
            </div>
          </div>
        </div>

        <div className="moreMindful" id="moreMindful">
          <h1 className="heading">
            Join millions getting more mindful with Headspace
          </h1>
          <div className="icons-container">
            <div className="icons">
              <div className="star-icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>
              </div>
              <h3>4.9Stars</h3>
              <p>Average rating</p>
            </div>
            <div className="icons">
              <i className="fa-solid fa-award"></i>
              <h3>611.9k Rating</h3>
              <p>On iOS and Google Play</p>
            </div>
            <div className="icons">
              <i className="fa-solid fa-users"></i>
              <h3>7M Downloads</h3>
              <p>Across all platforms</p>
            </div>
          </div>
          <div className="moreMindful-btn">
            <a href="#" className="btn">
              Start your free trial
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mindfulness;
