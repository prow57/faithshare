import "./register.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Register() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const history = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the login page when "Log into Account" is clicked
    history("/login"); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/member/register", formData);
      console.log(response.data); // Log response from backend
      
       history("/home"); 
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Faithshare</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Faithshare.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="FUll Name"
                className="loginInput"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="loginInput"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="loginInput"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="loginInput"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button type="submit" className="loginButton">Sign Up</button>
              <button className="loginRegisterButton" onClick={handleLoginClick}>Log into Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
