import React, { useState } from "react";
import "../styles/Home.css";
import FullBannerImage from "../assets/bg2.png";
import HalfBannerImage from "../assets/bg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useSelector } from "react-redux";


import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [docemail, setdocEmail] = useState("");
  const [patientemail, setpatEmail] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  let useremail = useSelector((state) => state.doctoremail);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please upload an image before submitting.");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedImage);
    axios.post("http://localhost:5000/predict", formData).then((res) => {
      console.log(res.data);
      setData(res.data);

      const predictionData = {
        useremail,
        patientemail,
        prediction: res.data.class,
      };
    
      axios.put("http://localhost:4000/api/user/addprediction", predictionData);

    });
  };

  return (
    <>
      <Navbar />
      <div
        className="full-bg"
        style={{ backgroundImage: `url(${FullBannerImage})` }}
      >
        <Link to="/addpatient">
          <button
            style={{
              position: "absolute",
              top: "230px",
              left: "120px",
              padding: "10px 20px",
              backgroundColor: "#f7f8fa",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "170px",
              fontSize: "20px",
            }}
          >
            Add Patient
          </button>
        </Link>
        <div
          className="half-bg"
          style={{ backgroundImage: `url(${HalfBannerImage})` }}
        >
          <h1 className="title">Detection of Visual Defects in Children</h1>
          <div className="detect-cntr">
            {data ? (
              <div
                style={{
                  position: "relative",
                  top: "5rem",
                  left: "5rem",
                  height: "25rem",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                <h2>predicted disease is {data.class}</h2>
                <h2>confidence {data.confidence}</h2>
              </div>
            ) : (
              <div>
                <div id="patinputdiv" style={{position:"relative",top:"150px",left:"100px"}}>
                  
                  
                  <input
                    type="email"
                    name="patientemail"
                    id="patientemail"
                    value={patientemail}
                    onChange={(e) => setpatEmail(e.target.value)}
                    placeholder="Patient Email"
                    style={{marginLeft:"400px"}}
                  />
                </div>
                <div>
                  <h1 className="heading">Detect The Impairment</h1>
                  <div
                    className="upload-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                  

                    <div>
                      <label htmlFor="uploadtext">Upload Image to test</label>
                      <input
                        type="file"
                        accept="image/*"
                        id="uploadtext"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div>
                      <button onClick={handleSubmit}> predict</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
