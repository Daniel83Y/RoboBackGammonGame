import React from "react";

function PlayerInfo({ playerName, playerAvatar, playerStatus }) {
  return (
    <div className="flex gap-5 self-stretch text-5xl max-md:text-4xl">
      <div className="flex-auto my-auto   max-md:text-4xl">
        {playerName}
      </div>
      <img src={playerAvatar} alt={`${playerName}'s avatar`} className="shrink-0 aspect-square w-[90px]" />
      <img src={playerStatus} alt={`${playerName}'s status`} className="shrink-0 self-stretch my-auto aspect-[0.97] w-[59px]" />
    </div>
  );
}

export default PlayerInfo;
