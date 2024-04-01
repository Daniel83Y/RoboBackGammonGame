import React, { useEffect, useState,memo } from "react";
import MenuItem from "./MenuItem";
import 'firebase/auth';
import { auth } from '../../App.jsx';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { deleteUserFromCollection } from '../PlayerInfo/PlayerInfo.jsx';
import { onlineStateToggle } from '../context/playersStateLists-context.jsx';
import { useUserContext } from "../context/user-context.jsx";
import "./SideMenu.css";


const menuItems = [
  { label: "Profile settings" },
  { label: "Friend List" },
  { label: "How to play" },
  { label: "Logout", isLogout: true }, // Add a flag for logout item
  { label: "About us" },
];

function SideMenu({ setIsMenuOpen, isMenuOpen }) {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(isMenuOpen);

  useEffect(() => {
    setSideBar(isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setSideBar(false);
    setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
  try {
    console.log(user);
    if (user && user.displayName.includes('Anonymous')) {
      await signOut(auth);
      await deleteUserFromCollection(user.displayName);
      console.log("Signout Successful");
    } else {
      await onlineStateToggle(user.displayName);
      await signOut(auth);
    }
    navigate("/");
  } catch (error) {
    console.error("Sign-out error:", error);
    // Add additional error handling logic if necessary
  }
};




  return (
    <div className={`side-menu ${sideBar ? "open" : "closed"}`}>
      <div className="menu-background">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c8eb082f7ec026a07d30930e41d8926340dd12d7321f7067be353f7191a26?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
      </div>
      <div className="menu-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f862bcf532065eb50b97ed6375018e75228c0ddc97d03ad1a717614a5e24e686?apiKey=1477cbc897df4fa28e1ddba6fd23de63&"
          className="menu-logo"
          alt="Logo"
          onClick={closeMenu}
        />
        <nav className="menu-nav">
          {menuItems.map((item, index) => (
            // Render buttons using the handleSignOut function for logout item, otherwise render MenuItem
            item.isLogout ? (
              <button key={index} className="menu-item" onClick={handleSignOut}>
                {item.label}
              </button>
            ) : (
              <MenuItem key={index}>{item.label}</MenuItem>
            )
          ))}
        </nav>
      </div>
    </div>
  );
}

// export default  memo(SideMenu);
export default  SideMenu;
