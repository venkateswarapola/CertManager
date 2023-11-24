import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { contractABI, contractAddress } from '../../ConfigData';
import './VerificationComponent.css';

const VerificationComponent = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [addressInput, setAddressInput] = useState('');
  const [contract, setContract] = useState(null);
  const [inputWarning, setInputWarning] = useState('');

  useEffect(() => {
    async function initWeb3() {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3Instance);
          const deployedContract = new web3Instance.eth.Contract(contractABI, contractAddress);
          setContract(deployedContract);

          const accounts = await web3Instance.eth.getAccounts();
          if (accounts.length > 0) {
            web3Instance.eth.defaultAccount = accounts[0];
          } else {
            console.error('No accounts found in MetaMask.');
          }
        } catch (error) {
          console.error('User denied account access or something went wrong.');
        }
      } else if (window.web3) {
        const web3Instance = new Web3(window.web3.currentProvider);
        setWeb3(web3Instance);
        const deployedContract = new web3Instance.eth.Contract(contractABI, contractAddress);
        setContract(deployedContract);
      } else {
        console.error('No web3 detected. Please install MetaMask or use a web3-enabled browser.');
      }
    }
    initWeb3();
  }, []);

  const handleGetCertificate = async () => {
    if (!addressInput) {
      setInputWarning('Please enter an address');
      setCertificateData(null)
      return;
    }

    if (contract && addressInput !== '') {
      try {
        setCertificateData('');
        const cert = await contract.methods.getCertificateByAddress(addressInput).call();
        if (cert !== '') {
          const data = JSON.parse(cert);
          setCertificateData(data);
          setInputWarning('');
        } else {
          setCertificateData(null);
          setInputWarning('Certificate not found for this address');
        }
      } catch (error) {
        setCertificateData(null);
        setInputWarning('Certificate not found for this address');
        console.error('Error fetching certificate:', error);
      }
    }
  };

  const detailStyle = {
    marginBottom: '0.5rem',
    fontSize: '0.9rem'
  };

  const iconStyle = {
    marginRight: '0.5rem',
    color: 'green'
  };

  return (
    <div className="verification-container">
      <input
        className="verification-input"
        type="text"
        placeholder="Enter address to fetch certificate"
        value={addressInput}
        onChange={(e) => {
          setAddressInput(e.target.value);
          setInputWarning('');
        }}
      />
      <button className="verification-button" onClick={handleGetCertificate}>
        Get Certificate
      </button>
      {inputWarning && <p className="warning">{inputWarning}</p>}
      {certificateData && (
        <div className="certificate-details">
          <p style={detailStyle}><i style={iconStyle} className="fas fa-solid fa-user"></i>Name: {certificateData.name}</p>
          <p style={detailStyle}><i style={iconStyle} className="fas fa-id-card"></i>Date: {`${certificateData.day}/${certificateData.month}/${certificateData.year}`}</p>
          <p style={detailStyle}><i style={iconStyle} className="fas fa-calendar"></i>Reason: {certificateData.reason}</p>
          <div className="verified-symbol">&#10003; Verified</div> {}
        </div>
      )}
    </div>
  );
};

export default VerificationComponent;