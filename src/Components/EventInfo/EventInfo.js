import React from "react";
import { useState } from "react";
import CircularProgress from "./CircularProgress";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

import "./EventInfo.css";
import EventInfoPerson from "./EventInfoPerson";

function EventInfo() {
  const [people, setPeople] = useState([
    {
      name: "Shivansh Gupta",
      money: "4000",
      isAdmin: true,
    },
    {
      name: "Himalaya Gupta",
      money: "5000",
      isAdmin: true,
    },
    {
      name: "Priyansh Singh",
      money: "4000",
    },
    {
      name: "Naman Agarwal",
      money: "6000",
    },
    {
      name: "Mohit Singh",
      money: "3000",
    },
    {
      name: "Aviral Saxena",
      money: "2500",
    },
    {
      name: "Dhiren Chugh",
      money: "3500",
    },
  ]);

  return (
    <div className="eventInfo">
      <div className="eventInfo__budget">
        <div className="eventInfo__budget__main">
          <div className="eventInfo__budget__details">
            <p>Total Budget</p>
            <h3>$12000</h3>
            <br />
            <p>Budget remaining</p>
            <h4>$4000</h4>
          </div>
          <div className="evenInfo__budget__circular">
            <CircularProgress />
          </div>
        </div>
        <div className="eventInfo__budget__buttons">
          <button>
            <p>Deposit</p> <CallMadeIcon />
          </button>
          <button>
            <p>WithDraw</p>
            <CallReceivedIcon />
          </button>
        </div>
      </div>
      <div className="participantsDetails">
         <p>20 Participants</p>
         <p><i className="fa fa-user-plus"></i></p>
       </div>
      <div className="eventInfo__people">
        {people.map((person) => {
          return (
            <EventInfoPerson
              name={person.name}
              money={person.money}
              isAdmin={person.isAdmin}
            />
          );
        })}
      </div>
    </div>
  );
}

export default EventInfo;
