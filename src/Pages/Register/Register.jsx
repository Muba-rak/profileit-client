import React, { useState } from "react";
import "./register.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://profileit.onrender.com/api/v1/register";

  const redirect = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, email, password }),
      });

      const data = await res.json();
      console.log(data);
      if (data.success) {
        setIsLoading(false)
        redirect("/login");
      }
      if (data.errors) {
        setEmailError(data.errors.email);
        setpasswordError(data.errors.password);
        setTimeout(() => {
          setEmailError("");
          setpasswordError("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="getStarted">
        <div className="started">
          <div>
            <h1 className="join">
              Join Profile<span className="span">IT</span>.
            </h1>
            <p className="enter">
              Enter your email address to create an account on Postit.
            </p>
            <form onSubmit={createUser}>
              <div className="inputInfo">
                <label htmlFor="username">Who is Registering ?</label>
                {/* <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                /> */}
                <select
                  name=""
                  id=""
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select your status</option>
                  <option value="company">Company</option>
                  <option value="professor">Professor</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div className="inputInfo">
                <label htmlFor="email">Your Email Address</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small style={{ color: "red" }}>{emailError} </small>
              </div>
              <div className="inputInfo">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small style={{ color: "red" }}>{passwordError} </small>
              </div>
              <button className="btnContinue" type="submit">
                {isLoading ? "Registering..." : "Continue"}
              </button>
            </form>
            <Link to="/login" className="link1">
              <h6 className="alreadyStart">
                Already have an account? <span className="span">Sign In</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
