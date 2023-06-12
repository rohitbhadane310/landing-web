import React from "react";
import head from "../images/head-frame.png";

function Headspaces() {
  return (
    <>
      <div className="headspaces" id="headspaces">
        <h1 className="heading">Get some Headspace</h1>

        <a href="#" className="btn">
          Start your free trial
        </a>

        <div className="image">
          <img src={head} alt="" />
        </div>
      </div>
    </>
  );
}

export default Headspaces;
