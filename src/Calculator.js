import React from "react";
import "./Calculator.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function Calculator() {
  return (
    <>
      <h1>Calculator</h1>
      <div className="card">
        <div className="card-container col-lg-12 p-4">
          <div className="d-flex flex-column">
            <p className="m-2">Result</p>
            <div className="row">
              <div className="row">
                <div className="col-3">
                  <button className="m-1 btn btn-primary w-100">%</button>
                </div>
                <div className="col-3">
                  <button className="m-1 btn btn-primary w-100">/</button>
                </div>
                <div className="col-3">
                  <button className="m-1 btn btn-primary w-100">*</button>
                </div>
                <div className="col-3">
                  <button className="m-1 btn btn-primary w-100">-</button>
                </div>
              </div>
              <div className="row">
                <div className="column col-9">
                  <div className="row">
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">7</button>
                    </div>
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">8</button>
                    </div>
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">9</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">4</button>
                    </div>
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">5</button>
                    </div>
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">6</button>
                    </div>
                  </div>
                </div>
                <div className="col-3 d-flex">
                  <button className="m-1 btn btn-primary w-100">+</button>
                </div>
              </div>
              <div className="row">
                <div className="column col-9">
                  <div className="row">
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">1</button>
                    </div>
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">2</button>
                    </div>
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">3</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">0</button>
                    </div>
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">0</button>
                    </div>
                    <div className="col-4">
                      <button className="m-1 btn btn-primary w-100">.</button>
                    </div>
                  </div>
                </div>
                <div className="col-3 d-flex">
                  <button className="m-1 btn btn-primary w-100">Enter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
