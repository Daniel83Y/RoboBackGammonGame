// OnlinePlayers.js
import React from 'react';

function OnlinePlayers({ count }) {
  return (
    <div>
      <p className="mt-28 text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl"> Players Online: </p>
      <p className="mt-14 text-9xl text-center max-md:mt-10 max-md:text-4xl"> {count} </p>
    </div>
  );
}

export default OnlinePlayers;
