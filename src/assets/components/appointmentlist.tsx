import React from 'react';
import AppointmentCard from './apppointmentCard'; // Ensure proper capitalization
import './appointmentlist.css';
import Header from './Header';
import Sidebar from './sidebar';

const appointments = [
  {
    name: 'Dushimire Aine',
    title: 'Brain checking',
    description: 'He has a mental problem and he needs your advice. If you are available, just let us know.',
    imageUrl: 'https://via.placeholder.com/50',
  },
];

const AppointmentsList: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar /> {/* Sidebar occupies a fixed width */}
      <div style={{ flex: 1, padding: '1rem', marginLeft: '250px' }}>
        <Header />
        <div className="appointments-list">
          <h2 className="section-title">Recent Appointments</h2>
          <div className="appointment-cards">
            {appointments.map((appointment, index) => (
              <AppointmentCard
                key={index}
                name={appointment.name}
                title={appointment.title}
                description={appointment.description}
                imageUrl={appointment.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsList;
