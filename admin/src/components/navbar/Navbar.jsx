import React from "react";
import "./navbar.css";
import { NotificationsNone } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft">
          <span className="logo">𝕷і𝗍ᥱrᥲrᥡ 𝕯ᥱᥣіgһ𝗍s</span>
        </div>
        <div className="navRight">
          <div className="navbarIconContainer">
            <NotificationsNone />
            <span className="navIconBadge">3</span>
          </div>
          <div className="navbarIconContainer">
            <LanguageIcon />
            <span className="navIconBadge">3</span>
          </div>
          <div className="navbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png"
            alt=""
            className="navAvatar"
          />
        </div>
      </div>
    </div>
  );
}
