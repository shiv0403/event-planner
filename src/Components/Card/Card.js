import React from "react";
import './Card.css';
import { useState } from "react";

function Card({event}) {
    return (
      <div className="eventCard" tabIndex={0} id={event.id}>
      <div className="cardTopSection" style={{backgroundImage: `url("${event.category}.jpeg")`}}>
        <div className="cardPhoto">
          <img src={event.eventPhoto} alt="Event Profile Photo" />
        </div>
      </div>
      <h3 className="eventName" title="Celebrating Priyansh's Birthday">{event.title}</h3>
      <p className="eventVenue"><i className="fa fa-map-marker"></i>{event.venue}</p>
      <p className="eventDate"><i className="fa fa-clock"></i>Ends on {event.dueDate}</p>
      <p className="eventDate adminName"><i className="fa fa-user"></i>{event.owner}</p>
      <div className="cardBottomSection">
        <div className="peopleInEvent">
          <img src="batman.jpg" className="imgOne" alt="" />
          <img src="Amy_Baker25.jpg" className="imgTwo" alt="" />
          <img src="sample_image.png" className="imgThree" alt="" />
          <p style={{marginLeft: '5px'}}>Batman, Amy, Rajat and 2 more are in this event</p>
        </div> {/* Will make this a component later on */}
        <i className="fa fa-user-plus" />
      </div>
    </div>
  );
}

export default Card;
