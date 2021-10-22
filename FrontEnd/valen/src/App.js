import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/profile/profile"
//import { BroswerRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
