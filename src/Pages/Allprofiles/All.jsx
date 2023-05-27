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
          <h1>Lists of Profile You have Created</h1>
          <div>
            <button className="viewpassword" onClick={() => reveal()}>
              {show ? "Hide Password" : "View Password"}
            </button>
          </div>
        </div>

        <div className="maincontent">
          {isLoading ? (
            <div className="loader">
              <div>
                <Circles
                  height="100"
                  width="100"
                  color="#0086b0"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            </div>
          ) : (
            status.map((pro) => {
              const { _id, username, email, password } = pro;
              return (
                <div className="flexdiv" key={_id}>
                  <p> {username}</p>
                  <p>{email} </p>
                  <p>{show ? password : "✨✨✨✨✨✨✨✨"}</p>
                  <div></div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default All;
