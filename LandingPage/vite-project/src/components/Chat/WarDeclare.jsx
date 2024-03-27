import React,{useState} from 'react';

import './War.css';

function WarDeclaration({ handleDeny }) {
  return (
    <div className="my-section">
      <h1 className="my-heading">
        Daniel has declared war on you
      </h1>
      <div className="my-buttons">
        {/* Use button element for Battle */}
        <button className="my-button my-button-battle">
          Battle
          <div className="my-bar my-bar-battle"></div>
        </button>
        {/* Use button element for Denied */}
        <button className="my-button my-button-denied" onClick={handleDeny}>
          Denied
          <div className="my-bar my-bar-denied"></div>
        </button>
      </div>
    </div>
  );
}

export default WarDeclaration;