import React, { useState } from "react";
import "./login.css";
import "../Register/register.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://profileit.onrender.com/api/v1/login";
  const redirect = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    // console.log(data);
    if (data.success) {
      // console.log("good");
      setIsLoading(false);
      localStorage.setItem("token", data.token);
      redirect("/profile");
    }
    if (data.errors) {
      setEmailError(data.errors.email);
      setPasswordError(data.errors.password);
      setEmail("");
      setPassword("");
      setIsLoading(false);
      setTimeout(() => {
        setEmailError("");
        setPasswordError("");
      }, 3000);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="getStarted">
        <div className="started">
          <div>
            <h1 className="join2">Welcome Back</h1>

            <form>
              <div className="inputInfo">
                <label htmlFor="username">Your Email Address</label>
                <input
                  type="text"
                  id="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small style={{ color: "red" }}> {emailError} </small>
              </div>
              <div className="inputInfo">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small style={{ color: "red" }}> {passwordError} </small>
              </div>
              <button
                className="btnContinue2"
                type="submit"
                onClick={loginUser}
              >
                {isLoading ? "Logging In..." : "Continue"}
              </button>
            </form>
            <Link to="/" className="link1">
              <h6 className="alreadyStart2">
                No account? <span className="span">Sign Up</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
