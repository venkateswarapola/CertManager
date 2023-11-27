import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const navigate = useNavigate();
  //HomeComponent Styles
  const commonStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    height: '50%', // Adjust this value as needed
    cursor: 'pointer',
  };

  const headerContainerStyle = {
    backgroundColor: '#1877f2', // Facebook blue color
    color: '#ffffff', // White text
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
  };

  const headerStyle = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // Facebook-like font
    fontSize: '32px',
    margin: '0',
  };

  const subHeaderStyle = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // Facebook-like font
    fontSize: '18px',
    margin: '0',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '88px',
    transition: 'transform 0.3s ease',
  };

  const iconSize = '80px'; // Icon size for building and user

  const animationContainerStyle = {
    position: 'absolute',
    bottom: '20%', // Lower the animation to prevent overlap with the text
    left: 0,
    width: '100%',
    textAlign: 'center',
  };

  const verifyButtonStyle = {
    marginTop: '20px',
    marginBottom: '5px',
    backgroundColor: '#28a745', // Green color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '20px',
  };

  //Handle verfication button navigation
  const handleVerifyCertificate = () =>{
    navigate('/verify');
  }

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <div style={headerContainerStyle}>
        <div style={headerStyle}>CERT MANAGER</div>
        <div style={subHeaderStyle}>by Illuminati</div>
      </div>
      <div style={{ display: 'flex', width: '100%', height: 'calc(100% - 60px)' }}>
        <Link to="/issuer-login" style={{ ...commonStyle, ...linkStyle }}>
          <i className="fas fa-user-cog" style={iconStyle}></i>
          <p style={{fontSize: '30px'}}>Login as Administrator</p>
        </Link>
        <Link to="/receiver-login" style={{ ...commonStyle, ...linkStyle }}>
          <i className="fas fa-user" style={iconStyle}></i>
          <p style={{fontSize: '30px'}}>Login as User</p>
        </Link>
      </div>
      <button style={verifyButtonStyle} onClick={handleVerifyCertificate}>To Verify Certificate Click Here</button> {/* Updated Verify Button */}
      <div style={animationContainerStyle}>
        <i className="fas fa-building" style={{ position: 'absolute', left: '15%', fontSize: iconSize }}></i>
        <i className="fas fa-scroll" style={{ position: 'absolute', left: '15%', fontSize: iconSize, animation: 'sendCertificate 8s infinite linear' }}></i>
        <i className="fas fa-user" style={{ position: 'absolute', right: '15%', fontSize: iconSize }}></i>
      </div>
      <style>
        {`
          .fas:hover {
            transform: scale(1.2);
          }

          @keyframes sendCertificate {
            0% { left: 15%; opacity: 0; }
            50% { left: calc(50% - 40px); opacity: 1; }
            100% { left: calc(100% - 95px); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default HomeComponent;