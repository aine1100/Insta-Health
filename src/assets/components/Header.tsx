import React, { useState } from 'react';
import './Header.css';
import grouped from '/Group 1000005962.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Dashboard</h1>
      </div>
      <div className="search-bar">
          <input
            type="text"
            placeholder="Search any thing"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      <div className="header-right">
        <div className="header-icons">
          <FontAwesomeIcon icon={faBell} className="bell-icon" />
          <FontAwesomeIcon icon={faCog} className="settings-icon" />
          <img
          src={grouped}
          alt="Profile"
          className="profile-pic"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;