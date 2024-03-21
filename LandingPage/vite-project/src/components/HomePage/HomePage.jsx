// RoboBackgammonLandingPage.js
import React from 'react';
import LoginButton from "../LoginButtons/Login";
import OnlinePlayers from '../OnlinePlayers/OnlinePlayers';

function homePage() {
  const playersOnline = 0;

  return (
    <>
    <div className="flex flex-col justify-center content-between text-8xl font-bold text-white max-md:text-4xl">
      <div className="flex flex-col justify-center px-px w-full bg-white max-md:max-w-full max-md:text-4xl">
        <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-[1024px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f261b080867c9e7b041860dedd16df1d047e1449a9d73dedc7f384acd98ea281?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" alt="Background image" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col items-center mt-24 mb-24 max-w-full w-[943px] max-md:my-10 max-md:text-4xl">
            <h1 className="self-stretch text-center  max-md:max-w-full max-md:text-4xl"> RoboBackgammon </h1>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4304f11bd61d8b96535753cd47b5491c0ab25af6d9a25f25ddbc6cfc5793b00e?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" alt="RoboBackgammon logo" className="mt-4 max-w-full aspect-[14.29] w-[872px]" />
            <div className="flex gap-5 mt-8 max-w-full text-2xl font-extrabold text-black w-[872px] max-md:flex-wrap">
              <LoginButton provider="Facebook" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ff04048608b9772f7f1c4bfddce262e913dcf813ade53c88b598c9204af851f4?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" />
              <LoginButton provider="Google" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/31652264e0e148bf181f3da5623ecdb0e908787ce9f740bc69b2fe9832392860?apiKey=1477cbc897df4fa28e1ddba6fd23de63&" />
            </div>
            <OnlinePlayers count={playersOnline} />
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default homePage;
