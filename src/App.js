import React from "react";
import Modal from "./Components/SearchModal/SearchModal";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SIgnup/Signup";
import Layout from "./Pages/Layout";
import Chatbox from "./Components/Chatbox/Chatbox";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import EventInfo from "./Components/EventInfo/EventInfo";

function App() {
  return (
    <div className="App">
      {/* <Layout />
      <Login /> */}
      {/* <Chatbox /> */}
      {/* <CreateEvent /> */}
      <EventInfo />
    </div>
  );
}

export default App;
