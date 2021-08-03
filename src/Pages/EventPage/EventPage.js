import React from "react";
import Chatbox from "../../Components/Chatbox/Chatbox";
import EventInfo from "../../Components/EventInfo/EventInfo";
import LogFile from "../../Components/LogFile/LogFile";
import TaskCard from "../../Components/TaskCard/TaskCard";

function EventPage() {
  return (
    <div className="eventPage__container">
      <EventInfo />
      <TaskCard />
      <LogFile />
      <Chatbox />
    </div>
  );
}

export default EventPage;
