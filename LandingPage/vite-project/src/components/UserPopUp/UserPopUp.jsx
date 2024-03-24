import * as React from "react";

const MenuItem = ({ children }) => (
  <div className="relative mt-11 ">{children}</div>
);

const menuItems = [
  "Profile settings",
  "Friend List",
  "How to play",
  "Logout",
  "About us",
];

function MyComponent() {
  return (
    <div className="flex flex-col justify-center py-px text-5xl font-bold text-center text-white max-w-[290px]">
      <div className="flex overflow-hidden relative flex-col items-start pb-20 pl-14 w-full aspect-[0.28] fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c8eb082f7ec026a07d30930e41d8926340dd12d7321f7067be353f7191a26?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03b46e227234daf64719ccbda9ff2a9af79f9f87adc8f4b24b3591b17e37737d?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
          className="z-10 self-end aspect-[0.95] w-[59px]"
          alt=""
        />
        <nav>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              {item}
              <br />
              {index === 2 && <br />}
            </MenuItem>
          ))}
        </nav>
      </div>
    </div>
  );
}