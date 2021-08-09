import React from "react";
import "./Card.css";
import { useHistory } from 'react-router-dom';
import InviteModal from "../InviteModal/InviteModal";

function Card({ event }) {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    // <Link to="/event" style={{textDecoration:"none"}} >
    <div className="eventCard" onClick={() => history.push('/event')} tabIndex={0} id={event.id}>
      <div
        className="cardTopSection"
        style={{ backgroundImage: `url("${event.category}.jpeg")` }}
      >
        <div className="cardPhoto">
          <img src={event.eventPhoto} alt="Event Profile Photo" />
        </div>
      </div>
      <h3 className="eventName" title="Celebrating Priyansh's Birthday">
        {event.title}
      </h3>
      <p className="eventVenue">
        <i className="fa fa-map-marker"></i>
        {event.venue}
      </p>
      <p className="eventDate">
        <i className="fa fa-clock"></i>Ends on {event.dueDate}
      </p>
      <p className="eventDate adminName">
        <i className="fa fa-user"></i>
        {event.owner}
      </p>
      <div className="cardBottomSection">
        <div className="peopleInEvent">
          <img src="batman.jpg" className="imgOne" alt="" />
          <img src="Amy_Baker25.jpg" className="imgTwo" alt="" />
          <img src="sample_image.png" className="imgThree" alt="" />
          <p style={{ marginLeft: "5px" }}>
            Batman, Amy, Rajat and 2 more are in this event
          </p>
        </div>
        {open && <InviteModal open={open} handleClose={handleClose} />}
        <i className="fa fa-user-plus" onClick={(e) => {
           e.stopPropagation();
         handleOpen();
        
          }} />
      </div>
    </div>
    // </Link>
  );
}

export default Card;
