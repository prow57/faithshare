import "./register.css";
import { useEffect } from "react";
import axios from "axios";

export default function Register() {
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/register", FormData)
      .then(response => (response.data))
      .catch(error => console.error("Error fetching users data:", error));
  });

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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
