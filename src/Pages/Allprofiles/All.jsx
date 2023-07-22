import React, { useState, useEffect } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import "./all.css";
import { Circles } from "react-loader-spinner";
const All = () => {
  // use a dummy state
  // fetch data to update password whn btn ic clicked

  const token = localStorage.getItem("token");
  const posturl = "https://profileit.onrender.com/api/v1/status";
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState([]);
  const [show, setShow] = useState(false);

  const getStatus = async () => {
    setIsLoading(true);
    const res = await fetch(posturl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (data.success) {
      setIsLoading(false);
      console.log(data.statuses);
      setStatus(data.statuses);
    }
  };
  useEffect(() => {
    getStatus();
  }, []);
  const reveal = () => {
    setShow(!show);
  };
  return (
    <div className="">
      <Navbar2 />
      <main className="themain">
        <div className="simplenav">
          <h1 className="fw-light fs-4">Lists of Profile You have Created</h1>
          <div>
            <button className="viewpassword" onClick={() => reveal()}>
              {show ? "Hide Password" : "View Password"}
            </button>
          </div>
        </div>

        <div className="maincontent">
          {isLoading ? (
            <div className="loader vh-100 d-flex justify-content-center align-items-center">
              <div>
                <Circles
                  height="200"
                  width="200"
                  color="#0086b0"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            </div>
          ) : (
            <div className="card">
              {status.map((c) => {
                const {
                  _id,
                  username,
                  address,
                  hobby,
                  height,
                  dob,
                  fullname,
                  email,
                  mothersmaidenname,
                  password,
                  gender,
                  nationality,
                  skills,
                } = c;
                return (
                  <div key={_id} className="maincard">
                    <p>Full Name : {fullname}</p>
                    <p>Email: {email}</p>
                    <p>Username: {username}</p>
                    <p> Address: {address} </p>
                    <p>Date of Birth: {dob}</p>
                    <p>Nationality: {nationality} </p>
                    <p>Skills: {skills}</p>
                    <div className="hei">
                      <p>
                        Height: {height} gender: {gender}{" "}
                      </p>
                    </div>
                    <p>Hobby: {hobby} </p>
                    <p>Password: {show ? password : "********"} </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default All;
