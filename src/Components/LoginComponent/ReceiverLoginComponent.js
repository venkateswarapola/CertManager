import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReceiverLoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  //Handle Email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //Handle password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //Handle login submission and navigate to appropriate page
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/receiver');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 5px 0px #ccc', backgroundColor: '#ffffff' }}>
        <h2 style={{ textAlign: 'center' }}>Receiver Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{ 
                width: 'calc(100% - 20px)',
                padding: '10px',
                borderRadius: '15px', 
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              style={{ 
                width: 'calc(100% - 20px)',
                padding: '10px',
                borderRadius: '15px', 
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: 'calc(100% - 20px)', 
              padding: '10px',
              backgroundColor: '#1877f2',
              color: '#ffffff',
              border: 'none',
              borderRadius: '15px', 
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            Login
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          Don't have an account?
          <span style={{ textDecoration: 'none', color: '#1877f2', cursor: 'pointer' }}> Register here</span>
        </div>
      </div>
    </div>
  );
};

export default ReceiverLoginComponent;