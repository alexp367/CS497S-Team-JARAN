import React from "react";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
// import ValenCards from "./ValenCards";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton
        className="swipeButtons__left"
        onClick={() => console.log("Left")}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="swipeButtons__repeat"
        onClick={() => console.log("Undo")}
      >
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="swipeButtons__right"
        onClick={() => console.log("Right")}
      >
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
