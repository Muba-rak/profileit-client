import React, { useState, useEffect } from "react";
import "./profile.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { Link,useNavigate} from "react-router-dom";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  const url = "https://profileit.onrender.com/api/v1/user";
  const [isLoading, setIsLoading] = useState(false);
const redirect = useNavigate()
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
  

  const handlePost = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = { username, email, password };
    const res = await fetch(posturl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

       body: JSON.stringify(body),
    });

    const data = await res.json();
    if (data.success) {
      redirect('/view')
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
          <h1>Welcome {user},</h1>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputInfo">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btnContinue" type="submit">
              {isLoading ? 'Creating Profile ....': 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
