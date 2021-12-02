import "./App.css";
import Header from "./Header";
import ValenCards from "./ValenCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/ViewMatches" element={window.sessionStorage.getItem('right_swiped')} />
          <Route
            path="/FindMatches"
            element={
              <React.Fragment>
                <ValenCards />
                {/* <SwipeButtons /> */}
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
