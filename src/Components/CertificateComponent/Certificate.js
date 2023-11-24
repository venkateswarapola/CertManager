import React from 'react';
import './Certificate.css'; // Assuming you have a CSS file for styling
import SealOfExcellence from '../../assets/sealOfEx.png'; // Import a seal image

const Certificate = ({ name, id, day, month, year, reason }) => {
  return (
    <div className="certificate">
      <div className="certificate-header">
        <h1>Certificate of Achievement</h1>
      </div>
      <div className="certificate-body">
        <p>Awarded to</p>
        <h2>{name}</h2>
        <p>for superior achievement and excellence in</p>
        <h3>{reason}</h3>
        <p>on {day} - {month} - {year}</p>
        <img src={SealOfExcellence} alt="Seal of Excellence" className="seal" />
      </div>
      <div className="certificate-footer">
        <p>Signed by Ethereum</p>
        <div className="signature-line"></div>
      </div>
    </div>
  );
};

export default Certificate;
