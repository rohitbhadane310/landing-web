import React from "react";


function Navbar() {
  return (
    <>
      <header>
        <a href="#" className="logo">
          <i className="fa-solid fa-circle"></i>headspace
        </a>

        <div id="menu-bar" className="fas fa-bars"></div>

        <nav className="navbar">
          <a href="#Articles">Articles</a>
          <a href="#Meditation">Meditation</a>
          <a href="#Sleep">Sleep</a>
          <a href="#Stress">Stress</a>
          <a href="#Mindfulness">Mindfulness</a>
        </nav>

        <nav className="navbar">
          <a href="#plans">Plans</a>
          <a href="#Work">Work</a>
          <a href="#About">About</a>
          <a href="#Help">Help</a>
          <a href="#Login">Login</a>
        </nav>

        <a href="#" className="btn">
          Try for free
        </a>
      </header>
    </>
  );
}

export default Navbar;
