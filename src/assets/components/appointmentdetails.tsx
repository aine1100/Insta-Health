import React from 'react';
import'./appointmentdetails.css';

const AppointmentDetails: React.FC = () => {
  return (
    <div className="appointment-details card ms-3">
      <div className="card-body">
        <h5 className="card-title">Appointment Details</h5>
        <p><strong>Location:</strong> Kigali, Rwanda</p>
        <p><strong>Time:</strong> 12:00 am</p>
        <p><strong>Appointment Type:</strong> Online</p>
        <div className="doctor-decision mt-3">
          <h6>Doctor Decision</h6>
          <button className="btn btn-success me-2">Approve</button>
          <button className="btn btn-danger me-2">Deny</button>
          <button className="btn btn-primary">Make a Prescription</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
