import React from "react"; //паше і без цього
//import logo from "./logo.svg";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
      {/*<Profile />*/}
    </div>
  );
};

export default App;
