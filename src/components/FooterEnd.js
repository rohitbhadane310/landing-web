import React from "react";

function FooterEnd() {
  return (
    <>
      <div className="end-footer">
        <nav className="footer-line">
          <a href="#© 2023 Headspace Inc.">© 2023 Headspace Inc.</a>
          <a href="#Terms & conditions">Terms & conditions</a>
          <a href="#Privacy policy">Privacy policy</a>
          <a href="#Cookie policy">Cookie policy</a>
          <a href="#CCPA notice">CCPA notice</a>
          <a href="#Security">Security</a>
          <a href="#Sitemap">Sitemap</a>
        </nav>

        <div className="footer-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>

        <div className="footer-lang">
            <i className="fa-solid fa-globe"></i>
            <span>English</span>
            <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </>
  );
}

export default FooterEnd;
