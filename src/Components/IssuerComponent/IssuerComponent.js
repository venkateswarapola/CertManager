import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Certificate from '../CertificateComponent/Certificate';
import CertificateForm from '../CertificateForm/CertificateForm';
import { contractABI, contractAddress } from '../../ConfigData';
import { dataset } from '../../ConfigData';

function IssuerComponent() {
  const [certificateData, setCertificateData] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);


  //Connect to Smart contract on browser load.
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

  //Call to the Smart Contact to handle store certificate from form data.
  const handleStoreCertificate = async (address,cert) => {
    if (contract && cert !== '') {
      try {
        await contract.methods.storeCertificate(address,cert).send({ from: web3.eth.defaultAccount });
        alert('Certificate stored successfully!');
      } catch (error) {
        console.error('Error storing certificate:', error);
      }
    }
  };

  
  //Handle submit certificate Data.
  const handleCertificateSubmit = (data) => {
    setCertificateData(data);
    const id = data.id;
    console.log(dataset[id]);
    let dataString = JSON.stringify(data);
    handleStoreCertificate(dataset[id],dataString)
  };
  return (
    <div className="App">
      <div>
      {!certificateData ? (
        <CertificateForm onSubmit={handleCertificateSubmit} />
      ) : (
        <Certificate {...certificateData} />
      )}
      </div>
    </div>
  );
}

export default IssuerComponent;