import React from 'react';
import './userprofile.css';
import Description from './Description';
import Statistics from './StatisticsCard';
import AppointmentDetails from './appointmentdetails';

const UserProfile: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-circle mb-3"
        />
        <h5>Dushimire Aine</h5>
        <p>Male, Age: 14</p>
        <p>0788888888</p>
        <p>adush@gmail.com</p>
        <p>Kigali, Rwanda</p>
        <div className="mt-3">
          <span className="badge bg-primary">Brain Cancer</span>
          <span className="badge bg-primary ms-2">Brain Cancer</span>
          <span className="badge bg-primary ms-2">Brain Cancer</span>
        </div>
      </div>
      <div className="additional-info mt-4">
        <Description />
        <Statistics />
        <AppointmentDetails />
      </div>
    </div>
  );
};

export default UserProfile;
