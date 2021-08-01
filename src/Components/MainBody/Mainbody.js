import React from 'react'
import './Mainbody.css'
import CardScroller from '../CardScroller/CardScroller'

function Mainbody() {
    return (
        <div className="mainBody">
            <div className="eventCardContainer">
                <h4 className="eventsCollectionName">Live Events</h4>
                <CardScroller/>
            </div>
            <div className="eventCardContainer" style={{marginTop:"40px"}}>
                <h4 className="eventsCollectionName">Completed Events</h4>
                <CardScroller/>
            </div>
        </div>
    )
}

export default Mainbody
