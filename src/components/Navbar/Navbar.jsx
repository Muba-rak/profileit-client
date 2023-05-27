import React, { useState } from "react";
import "./navbar.css";
import cancel from "../../assets/cancel.svg";
import hamburger from "../../assets/hamburger.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expand, setExpand] = useState(true);

  const navHandler = () => {
    setExpand(!expand);
  };

  return (
    <div className="navBar">
      <Link to="/" className="link">ProfileIT</Link>
      <div className={expand ? "nav-bar" : "nav-bar nav-bar-NX"}>
        <Link to="/login" className="link">
          <h3 onClick={navHandler}>Sign In</h3>
        </Link>
        <Link to="/signup" className="link">
          <button className="navBtn" onClick={navHandler}>
            Get Started
          </button>
        </Link>
        <img src={cancel} alt="" className="cancel" onClick={navHandler} />
      </div>
      <img src={hamburger} alt="" className="hamburger" onClick={navHandler} />
    </div>
  );
};

export default Navbar;
