import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './login.css';

const TibaHealth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLogin = () => {
    navigate('/DashboardOverview'); 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ maxWidth: '400px', width: '100%', borderRadius: '10px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Welcome to Tiba Health</h2>
          <h4 className="text-center mb-3" style={{ color: '#007bff' }}>Log into your account</h4>
          <form>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email address or Phone number</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
  <label htmlFor="password" className="form-label">Password</label>
  <div className="input-group">
    <input
      type={showPassword ? 'text' : 'password'}
      className="form-control"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button
      className="btn btn-outline-secondary input-group-text"
      type="button"
      onClick={togglePasswordVisibility}
    >
      {showPassword ? 'Hide' : 'Show'}
    </button>
  </div>
</div>

            <button  className="btn btn-primary btn-block mt-4" style={{ borderRadius: '20px' }} onClick={handleLogin}>
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <a href="#" className="text-danger">
              Forgot your password?
            </a>
          </div>
          <div className="text-center mt-3">Or</div>
          <div className="d-flex justify-content-center mt-3" style={{ gap: '16px' }}>
            <button
              className="btn btn-outline-primary"
              style={{ borderRadius: '20px', width: '48%' }}
            >
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </button>
            <button
              className="btn btn-outline-primary"
              style={{ borderRadius: '20px', width: '48%' }}
            >
              <FontAwesomeIcon icon={faGoogle} /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TibaHealth;
