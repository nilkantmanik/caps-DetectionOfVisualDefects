import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="upperside">
        <div className="col">
            <h3 id="navbar-titles">About</h3>
            <p className="navbar-p">
                Information about us here
            </p>
        </div>

        <div className="col">
            <h3 id="navbar-titles">Contact Us</h3>
            <p className="navbar-p">+91 77606 90305</p>
            <p className="navbar-p">+91 83104 39390</p>
        </div>

        <div className="col">
            <h3 id="navbar-titles">Mail Us At</h3>
            <p className="navbar-p">nilkantmanik@gmail.com</p>
            <p className="navbar-p">ssatishbalathe@gmail.com</p>
        </div>
      </div>
      <p style={{marginTop:"8px"}}> Copyright &copy; 2023 | All Rights Reserved</p>
    </div>
  );
}

export default Footer;