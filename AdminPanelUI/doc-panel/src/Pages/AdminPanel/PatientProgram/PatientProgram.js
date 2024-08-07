import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Sidebar/Sidebar";
import "../PatientProgram/patientProgram.css"; // Assuming this CSS file is where you will add the new gradient background style

function PatientProgram() {
  return (
    <div className="container-fluid bg-secondary min-vh-100 gradient-bg">
      <div className="row">
        <div
          id="sideBar"
          className="col-4 col-md-2 bg-dark vh-100 position-fixed"
        >
          <Sidebar />
        </div>
        <div className="col-4 col-md-2"></div>
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="content-top">
                  <div className="mt-3">
                    <label className="form-label">Exercise Name</label>
                    <input type="text" className="form-control" asp-for="Title" />
                  </div>
                  <div className="mt-3">
                    <label className="form-label">Exercise Description</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mt-3">
                    <label className="form-label">Set Information</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="mt-3">
                    <label className="form-label">Rep Information</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="mt-3">
                    <label className="form-label">Video Link</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                      Add Exercise
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="content-bottom">
                  <div
                    id="existing-exercises"
                    className="card"
                  >
                    <div className="card-header">Existing Exercises</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Bench Press</li>
                      <li className="list-group-item">Leg Extension</li>
                      <li className="list-group-item">Triceps Pushdown</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProgram;
