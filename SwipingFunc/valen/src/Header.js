import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import logo from "./valenicon.png";

function Header() {
  return (
    // BEM
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img className="header__logo" src={logo} alt="valen logo" />
      <IconButton>
        <QuestionAnswerIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
