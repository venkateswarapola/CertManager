import React from 'react';
import './PortalComponent.css';
import { Link } from 'react-router-dom';

const PortalComponent = (value) => {
  return (
    <div>
    <nav>
      {value.value === 'issue' ? (
        <>
          <Link to="/issuer">Issue Certificate</Link>
          {/* <Link to="/verify">Certificate Verification</Link> */}
        </>
      ) : value.value === 'receive' ? (
        <>
          <Link to="/receiver">My Certificate</Link>
          {/* <Link to="/verify">Certificate Verification</Link> */}
        </>
      ) : (
        <>
        </>
      )}
      <Link to="/">Logout</Link>
    </nav>
  </div>
  );
}

export default PortalComponent;