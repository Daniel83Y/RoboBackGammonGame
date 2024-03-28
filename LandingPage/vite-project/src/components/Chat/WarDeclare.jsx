import React,{useState} from 'react';
// import {handleDeny} from "./ChatComp.jsx"
import './War.css';

function WarDeclaration({ handleDeny }) {
  return (
    <div className="my-section">
      <div className="my-header">
      <h1 className="my-heading">
        Daniel has declared war on you
      </h1>
      </div>
      <div className="my-buttons">
        {/* Use button element for Battle */}
        <button className="my-button my-button-battle">
          Battle
        </button>
        {/* Use button element for Denied */}
        <button className="my-button my-button-denied" onClick={handleDeny}>
          Deny
        </button>
      </div>
    </div>
  );
}

export default WarDeclaration;