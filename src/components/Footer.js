import React from "react";
import foot1 from "../images/foot-1.png";
import foot2 from "../images//foot-2.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Get some Headspace</h4>
              <ul>
                <li>
                  <a href="#">Send a gift</a>
                </li>
                <li>
                  <a href="#">Redeem a code</a>
                </li>
                <li>
                  <a href="#">Student Plan</a>
                </li>
                <li>
                  <a href="#">All articles</a>
                </li>
                <li>
                  <a href="#">Subscribe</a>
                </li>
                <li>
                  <a href="#">Headspace for Work</a>
                </li>
                <li>
                  <a href="#">Admin portal login</a>
                </li>
                <li>
                  <a href="#">Engineering blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About Us</h4>
              <ul>
                <li>
                  <a href="#">About Headspace</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Partnership request</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Mental health resources</a>
                </li>
                <li>
                  <a href="#">Accessibility Statement</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>My Headspace</h4>
              <a href="#" className="btn">
                Login
              </a>
            </div>
            <div className="footer-col">
              <h4>Get the app</h4>
              <img src={foot1} alt="" />
              <img src={foot2} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
