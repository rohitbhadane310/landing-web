import React from "react";
import spcial from "../images/spcial-img1.png";

function Speciality() {
  return (
    <>
      <section className="speciality" id="speciality">
        <div className="image">
          <img src={spcial} alt="" />
          
          <div className="content">
            <a href="#" className="spe" id="spe1">
              01 - How to be more present
            </a>
            <a href="#" className="spe" id="spe2">
              02 - How to beat the Sunday Scaries
            </a>
            <a href="#" className="spe" id="spe3">
              03 - How to deal with climate anxiety
            </a>
            <a href="#" className="spe"id="spe4">
              04 - How getting outside can help you get fit
            </a>
          </div>
        </div>

        <div className="help">
          <a href="" className="btn">
            <i className="fa-regular fa-circle-question"></i> Help
          </a>
        </div>
      </section>
    </>
  );
}

export default Speciality;
