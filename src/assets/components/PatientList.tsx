import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PatientList.css';
import circled from '/doctor-removebg-preview 7@2x.png';

interface Patient {
  name: string;
  disease: string;
  location: string;
  status: string;
}

const patientsData: Patient[] = [
  { name: 'Dushimire aine', disease: 'Heart Diagnosis', location: 'Kigali', status: 'Pending' },
  { name: 'Dushimire aine', disease: 'Heart Diagnosis', location: 'Kigali', status: 'Failed' },
  { name: 'Dushimire aine', disease: 'Heart Diagnosis', location: 'Kigali', status: 'Pending' },
  { name: 'Dushimire aine', disease: 'Heart Diagnosis', location: 'Kigali', status: 'OK' },
  { name: 'Dushimire aine', disease: 'Heart Diagnosis', location: 'Kigali', status: 'Pending' },
  { name: 'Dushimire aine', disease: 'Heart Diagnosis', location: 'Kigali', status: 'Failed' },
  { name: 'Dushimire aine', disease: 'Heart Diagnosis', location: 'Kigali', status: 'Pending' },
  { name: 'Dushimire aine', disease: 'Heart Diagnosis', location: 'Kigali', status: 'OK' },






];

const PatientList: React.FC = () => {
  return (
    <div className="patient-list">
      <h2>Patients List</h2>
      <div className="patient-table">
        <div className="table-header">
          <div className="table-cell">Name</div>
          <div className="table-cell">Disease</div>
          <div className="table-cell">Location</div>
          <div className="table-cell">Status</div>
        </div>
        {patientsData.map((patient, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">
              <img src={circled} alt="Profile" /> {patient.name}
            </div>
            <div className="table-cell">{patient.disease}</div>
            <div className="table-cell">{patient.location}</div>
            <div className={`table-cell status-${patient.status.toLowerCase()}`}>{patient.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
