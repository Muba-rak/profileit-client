import React, { useState, useRef } from "react";
import "./others.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Dropdown from "react-bootstrap/Dropdown";

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
  };

  return (
    <div>
      <Navbar2 />
      <section className="container">
        <div className="row mt-3">
          <div className="col border border-secondary  bg-body-secondary py-3">
            <h2 className="text-center fw-light fs-4">Assignment</h2>
          </div>
          <div className="border border-secondary bg-body-secondary py-3">
            <h3 className="fw-lighter fs-4">No Category</h3>
          </div>
        </div>
        <div className="row border d-block d-lg-flex mt-3 justify-content-between  ">
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
              <p>
                {show
                  ? ""
                  : ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti adipisci distinctio, porro nam optio natus assumenda
                accusamus possimus, at odit saepe laborum laudantium in, iure
                blanditiis perferendis! Aut nostrum illum ea necessitatibus
                sequi minus, in consequuntur similique quia minima labore, animi
                accusantium ab maiores neque suscipit dolorum expedita ipsum,
                quae laudantium? Aliquid doloribus, culpa ex veniam praesentium
                reprehenderit est sunt cumque, ipsum in earum eveniet, labore
                aperiam distinctio ab nemo.`}
              </p>
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
                      Delete Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>
                {showL
                  ? ""
                  : ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti adipisci distinctio, porro nam optio natus assumenda
                accusamus possimus, at odit saepe laborum laudantium in, iure
                blanditiis perferendis! Aut nostrum illum ea necessitatibus
                sequi minus, in consequuntur similique quia minima labore, animi
                accusantium ab maiores neque suscipit dolorum expedita ipsum,
                quae laudantium? Aliquid doloribus, culpa ex veniam praesentium
                reprehenderit est sunt cumque, ipsum in earum eveniet, labore
                aperiam distinctio ab nemo.`}
              </p>
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
                      Delete Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>
                {showM
                  ? ""
                  : ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti adipisci distinctio, porro nam optio natus assumenda
                accusamus possimus, at odit saepe laborum laudantium in, iure
                blanditiis perferendis! Aut nostrum illum ea necessitatibus
                sequi minus, in consequuntur similique quia minima labore, animi
                accusantium ab maiores neque suscipit dolorum expedita ipsum,
                quae laudantium? Aliquid doloribus, culpa ex veniam praesentium
                reprehenderit est sunt cumque, ipsum in earum eveniet, labore
                aperiam distinctio ab nemo.`}
              </p>
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
              <p>
                {showA
                  ? ""
                  : ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti adipisci distinctio, porro nam optio natus assumenda
                accusamus possimus, at odit saepe laborum laudantium in, iure
                blanditiis perferendis! Aut nostrum illum ea necessitatibus
                sequi minus, in consequuntur similique quia minima labore, animi
                accusantium ab maiores neque suscipit dolorum expedita ipsum,
                quae laudantium? Aliquid doloribus, culpa ex veniam praesentium
                reprehenderit est sunt cumque, ipsum in earum eveniet, labore
                aperiam distinctio ab nemo.`}
              </p>
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
                      Delete Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>
                {showC
                  ? ""
                  : ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti adipisci distinctio, porro nam optio natus assumenda
                accusamus possimus, at odit saepe laborum laudantium in, iure
                blanditiis perferendis! Aut nostrum illum ea necessitatibus
                sequi minus, in consequuntur similique quia minima labore, animi
                accusantium ab maiores neque suscipit dolorum expedita ipsum,
                quae laudantium? Aliquid doloribus, culpa ex veniam praesentium
                reprehenderit est sunt cumque, ipsum in earum eveniet, labore
                aperiam distinctio ab nemo.`}
              </p>
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
                      Delete Assignment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <p>
                {showF
                  ? ""
                  : ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti adipisci distinctio, porro nam optio natus assumenda
                accusamus possimus, at odit saepe laborum laudantium in, iure
                blanditiis perferendis! Aut nostrum illum ea necessitatibus
                sequi minus, in consequuntur similique quia minima labore, animi
                accusantium ab maiores neque suscipit dolorum expedita ipsum,
                quae laudantium? Aliquid doloribus, culpa ex veniam praesentium
                reprehenderit est sunt cumque, ipsum in earum eveniet, labore
                aperiam distinctio ab nemo.`}
              </p>
            </div>
          </section>

          <section className="comment col-12 col-lg-4 ">
            <h3 className="fw-light">Overall Feedback</h3>
            <form className="w-100">
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
