import React from 'react'
import EventInfo from '../../Components/EventInfo/EventInfo'
import TaskCard from '../../Components/TaskCard/TaskCard'
import './EventPage.css'
import Chatbox from '../../Components/Chatbox/Chatbox'

function EventPage() {
    return (
        <div className="eventPageContainer">
            {/* <EventInfo/>
            <div style={{ padding: "10px 15px", height:"100vh", overflow:"hidden" }}>
                <TaskCard isComplete={false} bgColor="#353b48" />
                <TaskCard isComplete={false} bgColor="#353b48" />
                <TaskCard isComplete={false} bgColor="#353b48" />
                <TaskCard isComplete={false} bgColor="#353b48" />
                <TaskCard isComplete={false} bgColor="#353b48" />
                <TaskCard isComplete={false} bgColor="#353b48" />
            </div> */}
            {/* <Chatbox/> */}
        </div>
    )
}

export default EventPage;
