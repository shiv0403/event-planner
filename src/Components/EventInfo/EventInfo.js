import React from "react";
import { useState } from "react";
import CircularProgress from "./CircularProgress";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

import "./EventInfo.css";
import EventInfoPerson from "./EventInfoPerson";
import InviteModal from "../InviteModal/InviteModal";
import TransferMoney from "../TransferMoney/TransferMoney";
import AddMoney from "../AddMoney/AddMoney";

function EventInfo() {
  const [open, setOpen] = useState(false);
  const [openTransfer, setOpenTransfer] = useState(false);
  const [openLimit, setOpenLimit] = React.useState(false);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenTransfer = () => {
    setOpenTransfer(true);
  };

  const handleCloseTransfer = () => {
    setOpenTransfer(false);
  };

  const handleOpenLimit = () => {
    setOpenLimit(true);
  };

  const handleCloseLimit = () => {
    setOpenLimit(false);
  };

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
          <button onClick={handleOpenLimit}>
            <p>Set Limit</p>
            <CallReceivedIcon />
          </button>
          {openTransfer && (
            <TransferMoney
              open={openTransfer}
              handleClose={handleCloseTransfer}
            />
          )}

          {openLimit && (
            <AddMoney open={openLimit} handleClose={handleCloseLimit} />
          )}

          <button onClick={handleOpenTransfer}>
            <p>Transfer</p> <CallMadeIcon />
          </button>
        </div>
      </div>
      <div className="participantsDetails">
        <p>20 Participants</p>

        {open && <InviteModal open={open} handleClose={handleClose} />}

        <p>
          <i className="fa fa-user-plus" onClick={handleOpen}></i>
        </p>
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
