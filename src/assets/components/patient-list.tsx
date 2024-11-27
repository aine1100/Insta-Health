// PatientList.tsx
import React from "react";
import StatusBadge from "./StatusBadge";
import { FiPlus,FiSearch,FiSettings,FiFilter } from 'react-icons/fi';

interface Patient {
  image: string;
  name: string;
  date: string;
  disease: string;
  location: string;
  status: "Sick" | "Cured" | "Pending";
}

const patients: Patient[] = [
  {
    image: "/path/to/image.jpg",
    name: "Dushimire aine",
    date: "2024-08-12",
    disease: "Stress",
    location: "Kigali - Rwanda",
    status: "Sick",
  },
  {
    image: "/path/to/image.jpg",
    name: "Dushimire aine",
    date: "2024-08-12",
    disease: "Stress",
    location: "Kigali - Rwanda",
    status: "Sick",
  },
  {
    image: "/path/to/image.jpg",
    name: "Dushimire aine",
    date: "2024-08-12",
    disease: "Stress",
    location: "Kigali - Rwanda",
    status: "Sick",
  },
  {
    image: "/path/to/image.jpg",
    name: "Dushimire aine",
    date: "2024-08-12",
    disease: "Stress",
    location: "Kigali - Rwanda",
    status: "Sick",
  },
];

const PatientList: React.FC = () => {
  return (
    <div>
      <button className="btn btn-primary me-3 d-flex align-items-center">
        <FiPlus className="me-2"/>Add New Patient</button>
        <div className="d-flex align-items-center">
        <FiSearch className="me-3" size={20} />
        <FiSettings className="me-3" size={20} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Date</th>
            <th>Disease</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>
                <img
                  src={patient.image}
                  alt={patient.name}
                  style={{ width: "40px", borderRadius: "50%" }}
                />
              </td>
              <td>{patient.name}</td>
              <td>{patient.date}</td>
              <td>{patient.disease}</td>
              <td>{patient.location}</td>
              <td>
                <StatusBadge status={patient.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
