// LoginButton.js
import React from 'react';

function LoginButton({ provider, icon }) {
  return (
    <div className="flex flex-1 gap-2.5 justify-center px-6 bg-white  shadow-sm leading-[100%] rounded-[50px] max-md:px-5">
      <div className="grow my-auto">Login with {provider}</div>
      <img src={icon} alt={`${provider} logo`} className="shrink-0 max-w-full aspect-[1.16] w-[100px]" />
    </div>
  );
}

export default LoginButton;
