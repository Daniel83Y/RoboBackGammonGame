// OnlinePlayers.js
import React from 'react';

function OnlinePlayers({ count }) {
  return (
    <div>
      <p className="font-Stick mt-30 text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl"> Players Online: </p>
      <p className="font-Stick mt-14 text-9xl text-center max-md:mt-10 max-md:text-4xl"> {count} </p>
    </div>
  );
}
// OnlinePlayers.js
export function OnlinePlayersNav({ count }) {
  return (
    <div className="font-Stick flex items-center">
      <p className="text-5xl mr-2">Players Online:</p>
      <p className="text-5xl">{count}</p>
    </div>
  );
}


export default OnlinePlayers;
