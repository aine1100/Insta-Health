import React from "react";
import { FaMicrophone, FaVideo } from "react-icons/fa";
import './UpcomingConsultation.css';

const UpcomingConsultations: React.FC = () => {
  const consultations = Array(6).fill({
    name: "Dushimire aine",
    description: "Diabetes and headache",
    image: "path-to-patient-image", // Replace with the actual path
  });

  return (
    <div className="upcoming-consultations bg-white shadow-sm p-3 rounded">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Upcoming Consultations</h5>
        <a href="#" className="text-primary">View more &gt;</a>
      </div>
      <ul className="list-unstyled mt-3">
        {consultations.map((consultation, index) => (
          <li key={index} className="d-flex align-items-center mb-3">
            <img
              src={consultation.image}
              alt={consultation.name}
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="consultation-info flex-grow-1">
              <h6>{consultation.name}</h6>
              <p className="text-muted small">{consultation.description}</p>
            </div>
            <div className="consultation-buttons">
              <button className="btn btn-outline-primary me-1">
                <FaMicrophone />
              </button>
              <button className="btn btn-primary">
                <FaVideo />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingConsultations;
