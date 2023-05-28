import React, { useState, useEffect } from "react";
import "./profile.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
    mothersmaidenname: "",
    address: "",
    gender: "",
    hobby: "",
    height: "",
    dob: "",
    skills: "",
    nationality: "",
  });
  const token = localStorage.getItem("token");
  const url = "https://profileit.onrender.com/api/v1/user";
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfile({ ...profile, [name]: value });
  };
  const redirect = useNavigate();

  const getUser = async () => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { email } = await res.json();
    setUser(email);
  };
  useEffect(() => {
    getUser();
  }, []);

  const posturl = "https://profileit.onrender.com/api/v1/status";
  // const dumm = "http://localhost:5000/api/v1/status";

  const handlePost = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(profile);
    const res = await fetch(posturl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(profile),
    });

    const data = await res.json();
    console.log(data);
    if (data.success) {
      redirect("/view");
    }
    if (data.error) {
      console.log(data.error);
    }
  };
  return (
    <div>
      <Navbar2 />
      <hr className="line" />
      <div className="Welcome">
        <div className="welcome1">
          <h1 className="welcomeh1">Welcome {user},</h1>
          <p>
            Discover a World of Opportunities with Our Web Application! 🌟 🔍
            <br />
            Unlock limitless possibilities by creating your very own profile on
            our cutting-edge web application. Join a vibrant community of
            like-minded individuals and embark on a journey of growth,
            connection, and success.
          </p>
          <br />
          <br />
          <h3>Click to view all profiles you've created</h3>
          <br />
          <div className="btn_S">
            <Link to="/view">
              <button className="btnStory">View All Profiles</button>
            </Link>
          </div>
        </div>
        <div className="formsection">
          <h1>Create a Profile</h1>

          <form onSubmit={handlePost}>
            <div className="inputInfo">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={profile.username}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={profile.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="fullname">Skills and Experience</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="fullname">Nationality: </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={profile.nationality}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="username">Gender :</label>
              <select
                name="gender"
                id=""
                value={profile.gender}
                onChange={handleChange}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="inputInfo">
              <label htmlFor="mmn">Mother's Maiden Name</label>
              <input
                type="text"
                id="mmn"
                name="mothersmaidenname"
                value={profile.mothersmaidenname}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="height">Height :</label>
              <input
                type="number"
                id="height"
                name="height"
                value={profile.height}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="hobby">Hobby :</label>
              <input
                type="text"
                id="hobby"
                name="hobby"
                value={profile.hobby}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="date">Date Of Birth:</label>
              <input
                type="date"
                id="date"
                name="dob"
                value={profile.dob}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="address">Address :</label>
              <input
                type="text"
                id="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="cv">Upload CV : </label>
              <input type="file" name="" id="cv" />
            </div>

            <button className="btnContinue" type="submit">
              {isLoading ? "Creating Profile ...." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
