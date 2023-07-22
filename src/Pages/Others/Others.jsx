import React, { useState, useRef, useEffect } from "react";
import "./others.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Dropdown from "react-bootstrap/Dropdown";
import Loading from "../../components/Loading";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Others = () => {
  const textContainer = useRef();

  const focusInput = () => {
    textContainer.current.focus();
  };
  const [show, setShow] = useState(true);
  const [showL, setShowL] = useState(true);
  const [showM, setShowM] = useState(true);
  const [showA, setShowA] = useState(true);
  const [showC, setShowC] = useState(true);
  const [showF, setShowF] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Feedback submitted");
  };
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const url = `https://profileit.onrender.com/api/v1/assignment/${id}`;
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("user");
  const [assignment, setAssignment] = useState({
    introduction: "",
    literatureReview: "",
    methodology: "",
    analysisResults: "",
    conclusionRecommendation: "",
    revisedEdition: "",
  });

  const getAssignment = async () => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      const data = await res.json();
      setUser(data.post.createdBy.email);
      const { post, success } = data;
      setAssignment({
        introduction: post.introduction,
        analysisResults: post.analysisResults,
        methodology: post.methodology,
        conclusionRecommendation: post.conclusionRecommendation,
        revisedEdition: post.revisedEdition,
        literatureReview: post.literatureReview,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAssignment();
  }, [id]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar2 />
      <ToastContainer />

      <section className="container">
        <Link to="/others" className="text-decoration-none">
          <button className="btn btn-secondary mt-3">
            Back to Assignments
          </button>
        </Link>
        <div className="row mt-3">
          <div className="col border border-secondary  bg-body-secondary py-3">
            <h2 className="text-center fw-light fs-4">Assignment</h2>
          </div>
          <div className="border border-secondary bg-body-secondary py-3">
            <h3 className="fw-lighter fs-4">No Category</h3>
          </div>
        </div>
        <div className="row border d-block d-lg-flex mt-3 justify-content-between  ">
          <h4 className="fw-lighter">Submitted By : {user}</h4>
          <section className=" h-50 overflow-y-scroll col-12 col-lg-7 ">
            <div className="px-1  border border-secondary my-2 py-2">
              <div className="d-flex align-items-center justify-content-between gap-5">
                <h4 className="fw-light">Introduction Section</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    size="sm"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setShow(false)}>
                      View Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={focusInput}>
                      Edit Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShow(true)}>
                      Hide Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>{show ? "" : assignment.introduction}</p>
            </div>
            <div className="px-1 border border-secondary my-2 py-2">
              <div className="d-flex align-items-center justify-content-between gap-5">
                <h4 className="fw-light">Literature Review Section</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    size="sm"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setShowL(false)}>
                      View Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={focusInput}>
                      Edit Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowL(true)}>
                      Hide Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>{showL ? "" : assignment.literatureReview}</p>
            </div>
            <div className="px-1 border border-secondary my-2 py-2">
              <div className="d-flex align-items-center justify-content-between gap-5">
                <h4 className="fw-light">Methodology Section</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    size="sm"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setShowM(false)}>
                      View Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={focusInput}>
                      Edit Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowM(true)}>
                      Hide Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>{showM ? "" : assignment.methodology}</p>
            </div>
            <div className="px-1  border border-secondary my-2 py-2">
              <div className="d-flex align-items-center justify-content-between gap-5">
                <h4 className="fw-light">Analysis and Results Section</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    size="sm"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setShowA(false)}>
                      View Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={focusInput}>
                      Edit Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowA(true)}>
                      Delete Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>{showA ? "" : assignment.analysisResults}</p>
            </div>
            <div className="px-1 border border-secondary my-2 py-2">
              <div className="d-flex align-items-center justify-content-between gap-5">
                <h4 className="fw-light">Conclusions and Recommendations</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    size="sm"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setShowC(false)}>
                      View Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={focusInput}>
                      Edit Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowC(true)}>
                      Hide Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>{showC ? "" : assignment.conclusionRecommendation}</p>
            </div>
            <div className="px-1   border border-secondary my-2 py-2">
              <div className="d-flex align-items-center justify-content-between gap-5">
                <h4 className="fw-light">Final Revised Study</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    size="sm"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setShowF(false)}>
                      View Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={focusInput}>
                      Edit Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowF(true)}>
                      Hide Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <p>{showF ? "" : assignment.revisedEdition}</p>
            </div>
          </section>

          <section className="comment col-12 col-lg-4 ">
            <h3 className="fw-light">Overall Feedback</h3>
            <form className="w-100" onSubmit={handleSubmit}>
              <textarea
                ref={textContainer}
                className="form-control  rounded-2"
                id="a"
                rows="10"
              ></textarea>
              <button className="btn btn-secondary my-2">
                Submit Feedback
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Others;
