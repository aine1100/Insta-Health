import React, { useState } from "react";
import "./userprofile.css";
import Sidebar from "./sidebar";

const UserProfile: React.FC = () => {
  // State to control the visibility of the prescription modal
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);

  const handleOpenPrescriptionModal = () => setShowPrescriptionModal(true);
  const handleClosePrescriptionModal = () => setShowPrescriptionModal(false);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 sidebar">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-10 main-content">
          {/* Header Section */}
          <div className="row mb-4 align-items-center">
            <div className="col-6">
              <h4>Appointments</h4>
            </div>
            <div className="col-4">
              <input
                type="text"
                placeholder="Search anything"
                className="form-control search-input"
              />
            </div>
            <div className="col-2 text-end">
              <img
                src="https://via.placeholder.com/40"
                alt="Doctor"
                className="rounded-circle profile-icon"
              />
            </div>
          </div>

          {/* Profile and Description Section */}
          <div className="row">
            {/* Horizontal User Profile Card */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center">
                  {/* Profile Image */}
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="rounded-circle me-3"
                    style={{ width: "100px", height: "100px" }}
                  />
                  {/* User Details */}
                  <div>
                    <h5>Dushimire Aine</h5>
                    <p>Male, Age: 14</p>
                    <p>0788888888</p>
                    <p>adush@gmail.com</p>
                    <p>Kigali, Rwanda</p>
                    <div className="mt-2">
                      <span className="badge bg-primary">Brain Cancer</span>
                      <span className="badge bg-primary ms-2">Brain Cancer</span>
                      <span className="badge bg-primary ms-2">Brain Cancer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-primary">Description</h6>
                  <p>
                    He is having many allergic problems on the medicine and also
                    the brain is affecting him very hard where he can't survive
                    for long time. He is also having tumours on his body, hence
                    making him inefficient in his work and being stressed every
                    day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Details Section */}
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-primary">Appointment Details</h6>
                  <div className="row">
                    <div className="col-md-4">
                      <h6 className="text-primary">Location</h6>
                      <p>Kigali, Rwanda</p>
                    </div>
                    <div className="col-md-4">
                      <h6 className="text-primary">Time</h6>
                      <p>12:00 am</p>
                    </div>
                    <div className="col-md-4">
                      <h6 className="text-primary">Appointment Type</h6>
                      <p>Online</p>
                    </div>
                  </div>
                  <div className="text-end mt-3">
                    <button className="btn btn-success me-2">Approve</button>
                    <button className="btn btn-danger me-2">Deny</button>
                    <button
                      className="btn btn-primary"
                      onClick={handleOpenPrescriptionModal}
                    >
                      Make a Prescription
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="row mt-4">
            <div className="col-12">
              <h6 className="text-primary">Statistics</h6>
              {/* Add Statistics Component here */}
            </div>
          </div>
        </div>
      </div>

      {/* Prescription Modal */}
      <div
        className={`modal fade ${showPrescriptionModal ? "show" : ""}`}
        tabIndex={-1}
        style={{ display: showPrescriptionModal ? "block" : "none" }}
        aria-labelledby="prescriptionModalLabel"
        aria-hidden={!showPrescriptionModal}
      >
        <div className="modal-dialog modal-lg"> {/* Increase size by adding 'modal-lg' */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="prescriptionModalLabel">
                Make a Prescription
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClosePrescriptionModal}
              ></button>
            </div>
            <div className="modal-body">
              {/* Prescription Form */}
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="diseaseName" className="form-label">
                      Disease Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="diseaseName"
                      placeholder="Enter disease name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="medicalDosage" className="form-label">
                      Medical Dosage
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="medicalDosage"
                      placeholder="Enter dosage"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="prescriptionDescription" className="form-label">
                    Prescription Description
                  </label>
                  <textarea
                    className="form-control"
                    id="prescriptionDescription"
                    rows={3}
                    placeholder="Enter medicine and dosage details"
                  ></textarea>
                </div>

                {/* Medical Frequency Inputs */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label htmlFor="morningFrequency" className="form-label">
                      Medical Frequency (Morning)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="morningFrequency"
                      placeholder="Enter frequency"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="lunchFrequency" className="form-label">
                      Medical Frequency (Lunch)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lunchFrequency"
                      placeholder="Enter frequency"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="eveningFrequency" className="form-label">
                      Medical Frequency (Evening)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eveningFrequency"
                      placeholder="Enter frequency"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClosePrescriptionModal}
              >
                cancel
              </button>
              
              <button type="button" className="btn btn-success">
                Save 
              </button>
              <button type="button" className="btn btn-primary">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
