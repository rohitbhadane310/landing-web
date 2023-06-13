import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {

  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const {user, isAuthenticated } = useAuth0();

 
  return (
    <>
      <header>
        <a href="#" className="logo" id="logo">
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
          <Link to="/plans">plans</Link>
          <a href="#Work">Work</a>
          <a href="#About">About</a>
          <a href="#Help">Help</a>
          <a href="#Login">Login</a>
        </nav>

        <a href="#" className="btn" id="headBtn">
          Try for free
        </a>
          {isAuthenticated && <p>
            {user.name}
          </p>}
          {isAuthenticated ? (
             <a className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Log Out
            </a>
          ):(
            <a className="btn" onClick={() => loginWithRedirect()}>Log In</a>
          )}
      </header>
    </>
  );
}

export default Navbar;
