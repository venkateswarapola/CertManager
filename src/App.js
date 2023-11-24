import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IssuerComponent from './Components/IssuerComponent/IssuerComponent';
import ReceiverComponent from './Components/ReceiverComponent/ReceiverComponent';
import VerificationComponent from './Components/VerificationComponent/VerificationComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent'
import IssuerLoginComponent from './Components/LoginComponent/IssuerLoginComponent';
import ReceiverLoginComponent from './Components/LoginComponent/ReceiverLoginComponent';
import IssueMainComponent from './Components/IssueMainComponent/IssueMainComponent';
import ReceiveMainComponent from './Components/ReceiveMainComponent/ReveiveMainComponent';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomeComponent />}/>
          <Route path="/issuer-login" element={<IssuerLoginComponent />}/>
          <Route path="/receiver-login" element={<ReceiverLoginComponent />}/>
          <Route path="/issuer" element={<IssueMainComponent />} />
          <Route path="/receiver" element={<ReceiveMainComponent />} />
          <Route path="/verify" element={<VerificationComponent />} />
        </Routes>
    </Router>
  );
}

export default App;
