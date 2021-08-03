import React from "react";
import CreateTaskCard from "./Components/CreateTaskCard/CreateTaskCard";
import TaskCard from "./Components/TaskCard/TaskCard";
import Modal from "./Components/SearchModal/SearchModal";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SIgnup/Signup";
import Layout from "./Pages/Layout";
import Chatbox from "./Components/Chatbox/Chatbox";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import EventInfo from "./Components/EventInfo/EventInfo";
import LogFile from "./Components/LogFile/LogFile";
import EventPage from "./Pages/EventPage/EventPage";
import AddTaks from "./Components/AddTask/AddTaks";

function App() {
  return (
    <div className="App">
      {/* <Layout /> */}
      {/* <Login /> */}
      {/* <Chatbox /> */}
      {/* <CreateEvent /> */}
      {/* <EventInfo /> */}
      {/* <LogFile /> */}
      {/* <EventPage /> */}
      <AddTaks />
    </div>
  );
}

export default App;
