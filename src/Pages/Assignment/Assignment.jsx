import React, { useState } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import "./assignment.css";

const Assignment = () => {
  const [files, setFiles] = useState({
    introduction: null,
    literatureReview: null,
    methodology: null,
    analysisResults: null,
    conclusionRecommendation: null,
    revisedEdition: null,
  });

  const handleFileChange = (e, label) => {
    const file = e.target.files[0];
    setFiles({ ...files, [label]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the uploaded files
    console.log(files);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const handleViewSubmission = (file) => {
    setCurrentFile(file);
    setModalOpen(true);
  };

  const handleEditAssignment = (file) => {
    // Perform edit assignment action
    console.log("Edit Assignment:", file);
  };

  const handleDeleteAssignment = (file) => {
    // Perform delete assignment action
    console.log("Delete Assignment:", file);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Navbar2 />
      <h1 style={{ textAlign: "center", color: " #0086b0", marginTop: "20px" }}>
        Upload Assignment
      </h1>
      <section className="idan">
        <form className="assform" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="introduction">Introduction:</label>
            <input
              type="file"
              id="introduction"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, "introduction")}
              className="custom-file-upload"
            />
          </div>
          <div>
            <label htmlFor="literatureReview">Literature Review:</label>
            <input
              type="file"
              id="literatureReview"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, "literatureReview")}
              className="custom-file-upload"
            />
          </div>
          <div>
            <label htmlFor="methodology">Methodology:</label>
            <input
              type="file"
              id="methodology"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, "methodology")}
              className="custom-file-upload"
            />
          </div>
          <div>
            <label htmlFor="analysisResults">Analysis and Results:</label>
            <input
              type="file"
              id="analysisResults"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, "analysisResults")}
              className="custom-file-upload"
            />
          </div>
          <div>
            <label htmlFor="conclusionRecommendation">
              Conclusion and Recommendation:
            </label>
            <input
              type="file"
              id="conclusionRecommendation"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, "conclusionRecommendation")}
              className="custom-file-upload"
            />
          </div>
          <div>
            <label htmlFor="revisedEdition">Revised Edition:</label>
            <input
              type="file"
              id="revisedEdition"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, "revisedEdition")}
              className="custom-file-upload"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Assignment;
