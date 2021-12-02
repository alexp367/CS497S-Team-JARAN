import React, { useState, useEffect, useRef, useMemo } from "react";
import ValenCard from "react-tinder-card";
import database from "./firebase";
import "./ValenCards.css";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
// import ValenCards from "./ValenCards";
import "./SwipeButtons.css";

function ValenCards() {

  let right_swiped = [];

  const [people, setPeople] = useState([]);

  // Runs based on a condition
  useEffect(() => {
    // Runs in here
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const [currentIndex, setCurrentIndex] = useState(
    database.collection("people").length - 1
  );
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(database.collection("people").length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < database.collection("people").length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToAdd, index) => {
    console.log("Swiped " + direction + " on " + nameToAdd);
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if(direction === 'right'){
      right_swiped.push(nameToAdd);
    }
    console.log(right_swiped);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < database.collection("people").length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div>
      <div className="valenCards__cardContainer">
        {people.map((person, index) => (
          <ValenCard
            ref={childRefs[index]}
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name, index)}
            // onCardLeftScreen={() => outOfFrame(person.name, index)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </ValenCard>
        ))}
      </div>
      <div className="swipeButtons">
        <IconButton
          className="swipeButtons__left"
          onClick={() => swipe('left')}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="swipeButtons__repeat"
          onClick={() => goBack()}
        >
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="swipeButtons__right"
          onClick={() => swipe('right')}
        >
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default ValenCards;

