import React from 'react'
import Card from '../Card/Card'
import './Mainbody.css'

function Mainbody() {
    return (
        <div className="mainBody">
            <div className="eventCardContainer">
                <h4 className="eventsCollectionName">Live Events</h4>
                <Card/>
            </div>
        </div>
    )
}

export default Mainbody
