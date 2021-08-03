import React from 'react'
import './Card.css'

function Card({imgNo}) {
    return (
        <div className="eventCard" tabIndex={0}>
        <div className="cardTopSection" style={{backgroundImage: `url("0${imgNo}.jpeg")`}}>
          <div className="cardPhoto">
            <img src="brandLogo.svg" alt="Event Profile Photo" />
          </div>
        </div>
        <h3 className="eventName" title="Celebrating Priyansh's Birthday">Celebrating Priyansh's Birthday</h3>
        <p className="eventVenue"><i className="fa fa-map-marker"></i>Barbecue Nation, New Delhi</p>
        <p className="eventDate"><i className="fa fa-clock"></i>Ends in 23Hrs</p>
        <p className="eventDate adminName"><i className="fa fa-user"></i>Himalaya</p>
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
    )
}

export default Card
