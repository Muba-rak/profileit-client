import React, { useState } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import "./assignment.css";

const Assignment = () => {
  const [assignment, setAssignment] = useState({
    introduction: "",
    literatureReview: "",
    methodology: "",
    analysisResults: "",
    conclusionRecommendation: "",
    revisedEdition: "",
  });
  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the uploaded files
    console.log(files);
  };

  return (
    <div>
      <Navbar2 />
      <h1 style={{ textAlign: "center", color: " #0086b0", marginTop: "20px" }}>
        Upload Assignment
      </h1>
      <section className="container px-2">
        <div className="row">
          <div className="col border border-secondary">
            <h2 className="text-center fw-light fs-4">Assignment</h2>
          </div>
          <div className="border border-secondary">
            <h3 className="fw-lighter fs-4">No Category</h3>
          </div>
        </div>
        <div className="row border border-secondary">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="a" className="form-label fs-4 fw-light">
                Introduction Section
              </label>
              <textarea
                className="form-control"
                id="a"
                rows="4"
                name="introduction"
                value={assignment.introduction}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="b" className="form-label fs-4 fw-light">
                Literature Review Section
              </label>
              <textarea
                className="form-control"
                id="b"
                rows="3"
                name="literatureReview"
                value={assignment.literatureReview}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="c" className="form-label fs-4 fw-light">
                Methodology Section
              </label>
              <textarea
                className="form-control"
                id="c"
                rows="4"
                name="methodology"
                value={assignment.methodology}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="d" className="form-label fs-4 fw-light">
                Analysis and Results Section
              </label>
              <textarea
                className="form-control"
                id="d"
                rows="4"
                name="analysisResults"
                value={assignment.analysisResults}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="e" className="form-label fs-4 fw-light">
                Conclusions and Recommendations
              </label>
              <textarea
                className="form-control"
                id="e"
                rows="4"
                name="conclusionRecommendation"
                value={assignment.conclusionRecommendation}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label
                htmlFor="f"
                className="form-label fs-4 fw-light"
                name="revisedEdition"
                value={assignment.revisedEdition}
                onChange={handleChange}
              >
                Final Revised Study
              </label>
              <textarea className="form-control" id="f" rows="4"></textarea>
            </div>
            <div>
              <button
                className="btn fs-4 my-2"
                type="submit"
                style={{ backgroundColor: " #0086b0", color: "white" }}
              >
                Submit Assignment
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Assignment;
