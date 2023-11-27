import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './ReceiverComponent.css'; // Import the CSS file
import { contractABI, contractAddress } from '../../ConfigData';
import CardComponent from '../CardComponent/CardComponent';

const ReceiverComponent = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [address, setAddress] = useState(null);

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
    initWeb3()
  }, []);

  //Update data on reload
  useEffect(()=>{
    const handleGetOwnCertificate = async () => {
        console.log(contract)
        if (contract) {
          try {
            let cert = await contract.methods.getCertificate().call({ from: web3.eth.defaultAccount });
              setAddress(web3.eth.defaultAccount);
              let data = JSON.parse(cert);
              setCertificateData(data);
          } catch (error) {
            console.error('Error fetching certificate:', error);
          }
        }
      };
    handleGetOwnCertificate();
  }, [contract, web3, address])

  

  return (
    <div>
    {!certificateData ? (
        <p>There are no Certificates linked to this account</p>
      ) : (
        <CardComponent {...certificateData} address={address}/>
      )}
    </div>
  );
};

export default ReceiverComponent;
