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
  //const contractAddress = '0x1df16f506d8182072608e2dff976b34229934ed7'; // Replace with your deployed contract address


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

  const handleStoreCertificate = async (address,cert) => {
    if (contract && cert !== '') {
      try {
        //0x969849B4d0B48A99B8D17245164Dd33F8dc9c294
        await contract.methods.storeCertificate(address,cert).send({ from: web3.eth.defaultAccount });
        alert('Certificate stored successfully!');
      } catch (error) {
        console.error('Error storing certificate:', error);
      }
    }
  };

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