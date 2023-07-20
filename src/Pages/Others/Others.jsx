import React from "react";
import "./others.css";
import Navbar2 from "../../components/Navbar2/Navbar2";

const Others = () => {
  return (
    <div>
      <Navbar2 />
      <section>
        <div className="row">
          <div className="col border border-secondary">
            <h2 className="text-center fw-light fs-4">Assignment</h2>
          </div>
          <div className="border border-secondary">
            <h3 className="fw-lighter fs-4">No Category</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Others;
