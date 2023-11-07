import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png";
import capsbr from '../images/capsbr.PNG'
import './signup.css'

function Signup() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:4000/api/signup", {
          name,
          email,
          password,
        });
        console.log(response.data);
        localStorage.setItem("loggedinemail", JSON.stringify({loggedinemail: email}));
        navigate('/home');
    }catch (error) {
        console.error("Error during signup:", error);
      }
}
const handlelogin = async (e) => {
    e.preventDefault();
    navigate('/');
}

  return (
    <div className="signuppage">
      <div className="leftside" style={{position:"absolute",top:"10px",left:"10px"}}>
            <img src={Logo} alt="logo" />
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
      <div className="form-group" style={{ margin: "5px" }}>
        <label htmlFor="name"></label>

        <input
          type="text"
          name="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className="form-group" style={{ margin: "5px" }}>
        <label htmlFor="email"></label>

        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>

      <div className="form-group" style={{ margin: "5px" }}>
        <label htmlFor="password"></label>

        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div style={{ margin: "5px" }}>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
      <div style={{ margin: "5px" }}>
        <button type="submit" className="btn btn-primary" onClick={handlelogin}>
          Already a User
        </button>
      </div>
    </div>
  )
}

export default Signup