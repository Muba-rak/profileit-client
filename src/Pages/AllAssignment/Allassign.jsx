import React, { useState, useEffect } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Allassign = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const url = "https://profileit.onrender.com/api/v1/assignment";
  //fetch all assignments
  const getAssignments = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { assignments } = await res.json();
      setIsLoading(false);
      setUsers(assignments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAssignments();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar2 />
      <section className="container mt-4">
        <h1 className="fw-light bg-body-secondary py-3 text-center text-dark-emphasis">
          All assignments
        </h1>

        <div className="d-flex flex-wrap justify-content-between align-items-center">
          {users.map((item) => {
            const {
              _id,
              createdAt,
              createdBy: { email },
            } = item;
            return (
              <Link
                key={_id}
                to={`/others/${_id}`}
                className="text-decoration-none"
              >
                <div
                  className="text-dark bg-body-tertiary my-4 mx-auto rounded-2 p-3"
                  style={{ width: "18rem" }}
                >
                  <p className="fw-bold fs-4 ">Assignment submitted</p>
                  <p className="text-capitalize fs-4">
                    <span>Submitted By</span> : {email}
                  </p>
                  <p className="fs-5">Date: {createdAt} </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Allassign;
