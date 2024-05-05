import "./login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate(); // Initialize useNavigate hook


    const handleLogin = async () => {
    try {
      // Make an HTTP POST request to your backend login API
      const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
        email: email,
        password: password,
      });
      console.log(response.data.token);

      // If login is successful, redirect to the home page or any other desired route
      if (response.data.token != null) {
      localStorage.setItem("token", response.data.token)
        history("/home"); // Redirect to the home page
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      // Handle login error
      // setError("Invalid email or password");
      console.error("Login failed:", error);
    }
  };

  const handleRegisterClick = () => {
    // Redirect to register page when "Create a New Account" button is clicked
    history("/register"); // Change "/register" to the URL of your register page
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
            <input
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <span className="loginError">{error}</span>}
            <button className="loginButton" onClick={handleLogin}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={handleRegisterClick}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




