import React, { useState } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Allassign = () => {
  const [users, setUsers] = useState(["ola", "ade", "Solo", "Idan"]);
  //fetch all assignments
  return (
    <div>
      <Navbar2 />
      <section className="container mt-4">
        <h1 className="fw-light bg-body-secondary py-3 text-center text-dark-emphasis">
          All assignments
        </h1>

        <div className="d-flex flex-wrap justify-content-between align-items-center">
          {users.map((user, index) => {
            return (
              <Link
                key={index}
                to={`/others/${index}`}
                className="text-decoration-none"
              >
                <div
                  className="text-dark bg-body-tertiary my-4 mx-auto rounded-2 p-3"
                  style={{ width: "18rem" }}
                >
                  <p>Assignment submitted</p>
                  <p className="text-capitalize">
                    <span>Submitted By</span> : {user}
                  </p>
                  <p>Date: 18th May, 2023</p>
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
