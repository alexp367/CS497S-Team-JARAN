import './App.css';
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Profile from "./components/profile/Profile";
import FindMatches from "./components/FindMatches/FindMatches";
import ViewMatches from "./components/ViewMatches/ViewMatches";
import ProfilePreview from "./components/ProfilePreview/ProfilePreview";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path ="/" component={Profile} />
        <Route exact path="/FindMatches" component={FindMatches} />
        <Route exact path="/ViewMatches" component={ViewMatches} />
        <Route exact path="/ProfilePreview" component={ProfilePreview} />
      </Router>
    </div>
  );
}

export default App;
