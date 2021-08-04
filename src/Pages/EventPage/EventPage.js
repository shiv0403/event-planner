import React from 'react'
import EventInfo from '../../Components/EventInfo/EventInfo'
import TaskCard from '../../Components/TaskCard/TaskCard'
import './EventPage.css'
import Chatbox from '../../Components/Chatbox/Chatbox'
import LogFile from '../../Components/LogFile/LogFile'

function EventPage() {
    const taskArray = [];
    for (let i=0;i<10;i++){
        taskArray.push(<TaskCard isComplete={false} />);
    }


    return (
        <div className="eventPageContainer">
            <EventInfo/>
            {/* <div className="taskContainer" style={{  }}>
                {taskArray}
            </div>  */}
             {/* <div className="logFileContainer">
                <h4>Log File</h4>
                <LogFile/>
            </div> */}
            <Chatbox/>
        </div>
    )
}

export default EventPage;
