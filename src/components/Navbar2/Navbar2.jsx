import React, { useState } from "react";
import cancel from "../../assets/cancel.svg";
import hamburger from "../../assets/hamburger.svg";
import "../Navbar/navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const [expand, setExpand] = useState(true);
  const redirect = useNavigate();

  const navHandler = () => {
    setExpand(!expand);
  };
  const logout = () => {
    localStorage.removeItem("token");
    redirect("/login");
  };

  return (
    <div className="navBar anothernav">
      <Link to="/profile" className="link">
        ProfileIT
      </Link>
      <div className={expand ? "nav-bar" : "nav-bar nav-bar-NX"}>
        <Link to="/assign" className="link">
          Assignment
        </Link>
        <button className="logoutbtn" onClick={logout}>
          Logout
        </button>

        <img src={cancel} alt="" className="cancel" onClick={navHandler} />
      </div>
      <img src={hamburger} alt="" className="hamburger" onClick={navHandler} />
    </div>
  );
};

export default Navbar2;
