import React from "react";
import './Banner.css';
import Doctors from "/doctor 1.png";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary text-white p-4 rounded d-flex align-items-center justify-content-between">
      <div>
        <h3>Consult Different Patients</h3>
        <p>Tell patients more about their health</p>
        <button className="btn btn-light">Learn more</button>
      </div>
      <img
        src={Doctors}// Replace with actual path
        alt="Consultation Illustration"
        style={{ width: "150px", height: "auto" }}
      />
    </div>
  );
};

export default Banner;
