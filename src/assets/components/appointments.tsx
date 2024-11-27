import React from 'react';
import { MdNotifications, MdArrowForward } from 'react-icons/md';
import './appointment.css';

interface Appointment {
  id: number;
  title: string;
  patient: string;
  time: string;
}

const appointments: Appointment[] = [
  { id: 1, title: 'Neuron Treatment', patient: 'Mr Tom Harisson', time: '09:20AM - 11:30' },
  { id: 2, title: 'Neuron Treatment', patient: 'Mr Tom Harisson', time: '09:20AM - 11:30' },
  { id: 3, title: 'Neuron Treatment', patient: 'Mr Tom Harisson', time: '09:20AM - 11:30' },
  { id: 4, title: 'Neuron Treatment', patient: 'Mr Tom Harisson', time: '09:20AM - 11:30' },
  { id: 5, title: 'Neuron Treatment', patient: 'Mr Tom Harisson', time: '09:20AM - 11:30' },
  { id: 6, title: 'Neuron Treatment', patient: 'Mr Tom Harisson', time: '09:20AM - 11:30' },
];

const Appointments: React.FC = () => {
  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      <ul className="appointments-list">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="appointment-item">
            <div className="appointment-icon">
              <MdNotifications size={24} />
            </div>
            <div className="appointment-details">
              <span className="appointment-title">{appointment.title}</span>
              <span className="appointment-patient">{appointment.patient}</span>
            </div>
            <span className="appointment-time">{appointment.time}</span>
          </li>
        ))}
      </ul>
      <div className="appointments-footer">
        <a href="#" className="see-all">See all</a>
        <MdArrowForward size={20} />
      </div>
    </div>
  );
};

export default Appointments;
