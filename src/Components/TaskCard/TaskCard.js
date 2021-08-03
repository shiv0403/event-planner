import React, {useState} from "react";
import "./TaskCard.css";

function TaskCard({isComplete,bgColor}) {

  return (
      <div className={isComplete ? "taskCard disabled" : "taskCard"} style={{ backgroundColor: bgColor}}>
        <div className="taskNameAndPayOption">
            <div>
                <h3 className="taskName">Football</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
          <div className="taskOwner">
            <img src="sample_image.png" alt="Task Manager" />
          </div>
        </div>
        <div className="taskDueDateAndPayTask">
            <div>
                <i className="fa fa-calendar"></i>
                <span className="eventDueDate">20<sup>th</sup> Dec 2021</span>
            </div>
          <div className="payTask" title="Complete the task">
            <i className="fa fa-credit-card"></i>
          </div>
        </div>
      </div>
  );
}

export default TaskCard;

{/*
#353b48
#c23616
#f50057
#130f40
#244ed8
*/}