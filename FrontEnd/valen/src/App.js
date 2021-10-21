import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
//import { BroswerRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfilePicture />
    </div>
  );
}

export default App;
