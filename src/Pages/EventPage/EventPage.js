import React, {useState} from 'react'
import EventInfo from '../../Components/EventInfo/EventInfo'
import TaskCard from '../../Components/TaskCard/TaskCard'
import './EventPage.css'
import Chatbox from '../../Components/Chatbox/Chatbox'
import LogFile from '../../Components/LogFile/LogFile'

function EventPage() {
    const taskArray = [];
    const [showEventInfo, setShowEventInfo] = useState(true);
    const [showLogFile, setShowLogFile] = useState(false);
    const [showTasks, setShowTasks] = useState(false);

    for (let i=0;i<10;i++){
        taskArray.push(<TaskCard isComplete={false} />);
    }

    const handleInfoClick = () => {
        setShowEventInfo(true);
        setShowLogFile(false);
        setShowTasks(false);
    }
    const handleLogClick = () => {
        setShowLogFile(true);
        setShowEventInfo(false);
        setShowTasks(false);
    }
    const handleTaskClick = () => {
        setShowTasks(true);
        setShowEventInfo(false);
        setShowLogFile(false);  
    }
    



    return (
        <div className="eventPageContainer">
            <div className="leftSide">
                <div className="topHeader">
                    {showEventInfo ? <h2>Event Info</h2> : showLogFile ? <h2 style={{paddingLeft:""}}>Transactions Log</h2> : <h2>Tasks Assigned</h2>}
                    <div className="iconsSet">
                        <i className={showEventInfo ? "fa fa-info-circle active" : "fa fa-info-circle"} title="View Event Info" onClick={handleInfoClick}></i>
                        <i className={showLogFile ? "fa fa-file active" : "fa fa-file"} title="View Log File" onClick={handleLogClick}></i>
                        <i className={showTasks ? "fa fa-tasks active" : "fa fa-tasks"} title="View Tasks" onClick={handleTaskClick}></i>
                    </div>
                </div>
                {showEventInfo ? <EventInfo/> : showLogFile ? <LogFile/> : <div className="taskContainer">  {taskArray}</div>}
            </div>
        <div className="rightSide">
            <Chatbox/>
        </div>  
        </div>
    )
}

export default EventPage;
