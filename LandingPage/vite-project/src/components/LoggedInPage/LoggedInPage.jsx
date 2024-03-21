import * as React from "react";
import PlayerInfo from "../PlayerInfo/PlayerInfo"; 

function LoggedInPage() {
  const players = [
    {
      name: "Player Name",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f833731123ac1f584b47f7c0348eeac8fa791ab7c4c97d4b7a994d14594b71e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&",
      status: "https://cdn.builder.io/api/v1/image/assets/TEMP/de6d884f786d1457bf91455172c1b84047b5208b782bef08200c77e8a5fab281?apiKey=1477cbc897df4fa28e1ddba6fd23de63&",
    },
    // Add more player objects as needed
  ];

  return (
    <div className="flex flex-col justify-center font-bold text-center text-white bg-white">
      <div className="flex overflow-hidden relative flex-col items-center px-7 pt-3 pb-20 w-full min-h-[1024px] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c13d34486300520d3172c3eaa83ad3c40801e3862f6c05ae3fb3cd8c66dba174?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" alt="Background" className="object-cover absolute inset-0 size-full" />
        <header className="flex relative gap-5 items-center self-stretch w-full text-zinc-300 max-md:flex-wrap max-md:max-w-full">
          <h1 className="flex-auto self-stretch my-auto text-6xl  max-md:max-w-full max-md:text-4xl">
            RoboBackgammon
          </h1>
          {players.map((player, index) => (
            <PlayerInfo
              key={index}
              playerName={player.name}
              playerAvatar={player.avatar}
              playerStatus={player.status}
            />
          ))}
        </header>
      </div>
    </div>
  );
}

export default LoggedInPage;
