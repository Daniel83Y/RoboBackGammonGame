import * as React from "react";

const PlayerAvatar = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[60px]" />
);

const PlayerName = ({ children }) => (
  <div className="self-stretch my-auto">{children}</div>
);

const PlayerCard = ({ name, avatarSrc, avatarAlt, iconSrcs }) => (
  <article className="flex gap-5 justify-between items-start text-2xl leading-5 text-center text-white bg-neutral-500 max-w-[475px]">
    <img loading="lazy" src={avatarSrc} alt={avatarAlt} className="shrink-0 mt-1 aspect-[1.22] w-[76px]" />
    <PlayerName>{name}</PlayerName>
    {iconSrcs.map((src, index) => (
      <PlayerAvatar key={index} src={src} alt="" />
    ))}
  </article>
);

function MyComponent() {
  const player = {
    name: "Player 1",
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c06049b9742abae3be94da21fc97e3ba92069f25291d94624a4535be9dd9b0f2?apiKey=1477cbc897df4fa28e1ddba6fd23de63&",
    avatarAlt: "Player 1 avatar",
    iconSrcs: ["https://cdn.builder.io/api/v1/image/assets/TEMP/09627d3f9a87b609e0b00b9c7c6c6e828f423d54dfb37b0af610f2edbba725ae?apiKey=1477cbc897df4fa28e1ddba6fd23de63&", "https://cdn.builder.io/api/v1/image/assets/TEMP/9206af1eba9483498837d333f535829a8a44877035e2a1dfba28b849245ca46d?apiKey=1477cbc897df4fa28e1ddba6fd23de63&", "https://cdn.builder.io/api/v1/image/assets/TEMP/3974d307fc3bb7c6f682a1f7ec5970c6372c5d9c17961bb4cc007f44eb8095bc?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"]
  };

  return <PlayerCard {...player} />;
}