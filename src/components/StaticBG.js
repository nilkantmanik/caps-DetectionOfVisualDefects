import React from "react";
import FullBannerImage from "../assets/bg2.png";
import HalfBannerImage from "../assets/bg.jpg";
import "../styles/StaticBG.css";

function StaticBG() {
  return (
    <div className="full-bg" style={{ backgroundImage: `url(${FullBannerImage})` }}>
      <div
        className="half-bg"
        style={{ backgroundImage: `url(${HalfBannerImage})` }}
      >
        <h1>Detection of<br/>Visual Defects in Children</h1>
      </div>
    </div>
  );
}

export default StaticBG;
