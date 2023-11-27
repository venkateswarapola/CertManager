import React, { useState } from 'react';
import Certificate from '../CertificateComponent/Certificate';

const CardComponent = ({name, id, day, month, year, reason, address}) => {
  const [Cert, setCert] = useState(false);
  let certificateData ={
    name:name,
    id:id,
    day:day,
    month:month,
    year:year,
    reason:reason
  }
  const date = day+'-'+month+'-'+year;
  //Card Componen Styles
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '2rem auto',
    fontFamily: "'Arial', sans-serif",
    color: '#333',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold'
  };

  const detailStyle = {
    marginBottom: '0.5rem',
    fontSize: '0.9rem'
  };

  const iconStyle = {
    marginRight: '0.5rem',
    color: 'green'
  };

  //Certificate Handle Toggle
  const handleGetCertificate =()=>{
    setCert(true);
  }

  return (
    <div>
      {!Cert ? (
      <div style={cardStyle}>
        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <p style={detailStyle}><i style={iconStyle} className="fas fa-solid fa-user"></i>Name: {name}</p>
          <p style={detailStyle}><i style={iconStyle} className="fas fa-id-card"></i>ID: {id}</p>
          <p style={detailStyle}><i style={iconStyle} className="fas fa-calendar"></i>Date: {date}</p>
          <p style={detailStyle}><i style={iconStyle} className="fas fa-signature"></i>Address: {address}</p>
        </div>
        <button onClick={handleGetCertificate} style={buttonStyle}>Get Certificate</button>
      </div>
      ) : (
        <Certificate {...certificateData} />
      )}
    </div>
    
  );
};

export default CardComponent;