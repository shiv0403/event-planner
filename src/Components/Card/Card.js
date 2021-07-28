import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className="eventCard" tabIndex={0}>
        <div className="cardTopSection">
          <div className="cardPhoto">
            <img src="brandLogo.svg" />
          </div>
        </div>
        <h3 className="eventName">Priyansh's Birthday</h3>
        <div className="cardBottomSection">
          <div className="peopleInEvent">
            <img src="batman.jpg" className="imgOne" alt="" />
            <img src="Amy_Baker25.jpg" className="imgTwo" alt="" />
            <img src="sample_image.png" className="imgThree" alt="" />
            <p style={{marginLeft: '5px'}}>Batman, Amy, Rajat and 2 more are in this event</p>
          </div>
          <i className="fa fa-user-plus" />
        </div>
      </div>
    )
}

export default Card
