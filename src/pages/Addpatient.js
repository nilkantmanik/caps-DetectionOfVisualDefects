import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./addpatient.css";

// import { useSelector } from "react-redux";


import capsbr from '../images/capsbr.PNG'

function Addpatient() {
  const [patientemail, setEmail] = useState("");
  // const [useremail, setuserEmail] = useState("");
  const [name, setName] = useState('');
  const navigate = useNavigate();

  // let useremail = useSelector(state => state.doctoremail);
  let useremail = JSON.parse(localStorage.getItem("loggedinemail")).loggedinemail;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user/addpatient", {
        useremail,
        name,
        patientemail,
      });
      console.log(response.data);
      alert("Patient Added Successfully");
      navigate("/home");
    } catch (error) {
      alert("Patient valid Email and Name");
    }
  };

  const handleIconClick = async (e) => {
    e.preventDefault();
    navigate("/home");
  }

 

  return (
    <div className="addpatientpage">
      <div className="leftside" style={{position:"absolute",top:"10px",left:"10px"}}>
            <img src={Logo} alt="logo" onClick={handleIconClick} />

        </div>
      <svg
        className="custom-svgtr"
        width="674"
        height="471"
        viewBox="0 0 674 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200.362 83.2041C94.6655 91.7256 22.7724 24.6187 0.0378418 -10L673.5 -7.6699V470.334H598.281C365.375 445.036 404.583 344.175 453.3 296.908C481.75 263.731 533.195 183.798 511.37 129.473C484.089 61.5674 332.482 72.5522 200.362 83.2041Z"
          fill="#2E57D8"
        />
      </svg>

      <img src={capsbr} alt="img" className="custom-svglb" />

      <div>
        <h3 style={{color:"white" , fontSize:"40px"}}> Detection of Visual Defects in Children</h3>
      </div>
      {/* <div className="form-group" style={{ margin: "5px" }}>
        <label htmlFor="useremail"></label>

        <input
          type="useremail"
          name="useremail"
          id="useremail"
          value={useremail}
          onChange={(e) => setuserEmail(e.target.value)}
          placeholder="Doctor Email"
        />
      </div> */}
      

      <div className="form-group" style={{ margin: "5px" }}>
        <label htmlFor="name"></label>

        <input
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Patient Name"
        />
      </div>

      <div className="form-group" style={{ margin: "5px" }}>
        <label htmlFor="patientemail"></label>

        <input
          type="patientemail"
          name="patientemail"
          id="patientemail"
          value={patientemail}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" Patient Email"
        />
      </div>
      <div style={{ margin: "5px" }}>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Addpatient
        </button>
      </div>
      
    </div>
  );
}

export default Addpatient;
