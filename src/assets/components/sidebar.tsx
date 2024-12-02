import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faListAlt, faCalendarAlt, faComments, faUserMd, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import logo from '/Group 1000001874.png'; 

const Sidebar: React.FC = () => {
  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="InstaHealth Logo" className="logo" />
        <h2 className="brand-name">InstaHealth</h2>
      </div>
      <ul className="sidebar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end
          >
            <FontAwesomeIcon icon={faHouse} /> Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <FontAwesomeIcon icon={faListAlt} /> Patient list
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/appointmentlist"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <FontAwesomeIcon icon={faCalendarAlt} /> Appointments
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/messages"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <FontAwesomeIcon icon={faComments} /> Messages
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Consultationlayout"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <FontAwesomeIcon icon={faUserMd} /> Consultations
          </NavLink>
        </li>
        <li className="nav-item logout">
          <button className="nav-link" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
