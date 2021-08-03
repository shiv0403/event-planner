import React from 'react'

function CreateTaskCard() {
    return (
        <div>
             <div className="taskCard" style={{ backgroundColor: "#244ed8"}}>
        <div className="taskNameAndPayOption">
            <div>
                <h3 className="taskName">Football</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
          <div className="addAtask">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </div>
        </div>
    )
}

export default CreateTaskCard
