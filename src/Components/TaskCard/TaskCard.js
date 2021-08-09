import React, { useState } from "react";
import "./TaskCard.css";

function TaskCard({task}) {
  return (
      <div className={task.isCompleted ? "taskCard disabled" : "taskCard"} >
        <div className="taskNameAndPayOption">
          <div>
            <h3 className="taskName">{task.title}</h3>
            <p>Assigned to <strong>{task.AssignedTo}</strong> </p>
          </div>
          <div className="taskOwner">
            <img src={task.profilePicAssigned} alt="Task Manager" />
          </div>
        </div>
        <div className="taskDueDateAndPayTask">
          <div>
            <i className="fa fa-calendar"></i>
            <span className="eventDueDate">
              20 Dec 2021, 12:55PM
            </span>
          </div>
          <div className="payTask" title="Complete the task">
            <i className="fa fa-credit-card"></i>
          </div>
        </div>
      </div>
  );
}

export default TaskCard;

{
  /*
#353b48
#c23616
#f50057
#130f40
#244ed8
*/
}
