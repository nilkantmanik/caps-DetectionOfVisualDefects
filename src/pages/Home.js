import React from "react";
import "../styles/Home.css";
import FullBannerImage from "../assets/bg2.png";
import HalfBannerImage from "../assets/bg.jpg";


function Home() {
  return (
    <div
      className="full-bg"
      style={{ backgroundImage: `url(${FullBannerImage})` }}
    >
      <div
        className="half-bg"
        style={{ backgroundImage: `url(${HalfBannerImage})` }}
      >
        <h1 className="title">
          Detection of
          <br />
          Visual Defects in Children
        </h1>
        <div className="detect-cntr">
          <h1 className="heading">Detect The Impairment</h1>
          <div className="upload-container">
            <form action="">
              <input
                type="file"
                htmlFor="imgs"
                accept="image/*"
                className="file-upload"
              />
            </form>

            <button className="predict-btn">Detect</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
