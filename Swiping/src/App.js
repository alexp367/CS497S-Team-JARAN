import "./App.css";
import Header from "./Header";
import ValenCards from "./ValenCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" element={<h1>Chat Page</h1>} />
          <Route
            path="/"
            element={
              <React.Fragment>
                <ValenCards />
                {/* <SwipeButtons /> */}
              </React.Fragment>
            }
          />
        </Routes>

        {/* Tinder Cards */}
        {/* Buttons below tinder cards */}

        {/* Chats screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
