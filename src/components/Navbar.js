import React from 'react';
import Logo from "../assets/logo.png";

import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {

  
  return (
    <div className='navbar'>
        <div className="leftside">
            <img src={Logo} alt="logo" />
        </div>

        <div className="rightside">
        <Link to="/home">Home</Link>
        <Link to="/patientlist">Patient List</Link>
        <Link to="/logout">Logout </Link>
        <Link to="/tips">iHealth Tips</Link>
      </div>
    </div>
  )
}

export default Navbar