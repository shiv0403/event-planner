import React from "react";
import { useState,useEffect } from "react";
import CircularProgress from "./CircularProgress";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

import "./EventInfo.css";
import EventInfoPerson from "./EventInfoPerson";
import axios from "axios";
import InviteModal from "../InviteModal/InviteModal";
import TransferMoney from "../TransferMoney/TransferMoney";
import AddMoney from "../AddMoney/AddMoney";

function EventInfo() {
  const [Loader, setLoader] = useState(false);
  const [people, setPeople] = useState([]);
  const [open, setOpen] = useState(false);
  const [openTransfer, setOpenTransfer] = useState(false);
  const [openLimit, setOpenLimit] = React.useState(false); 

  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchTasks() {
      setLoader(true);
        const { data } = await axios.get("./people.json");
        console.log(data);
        setPeople(data);
        setLoader(false);
      
    }
    fetchTasks();
    return () => {
      source.cancel();
    };
  }, []);
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
    <div
      style={
        Loader
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }
          : {}
      }
    >
     {Loader ?  (
        <img
          src="loaderWifi.gif"
          style={{ width: "80px", height: "80px" }}
        ></img>
      ) : (
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
          <div className="eventInfo_budget_buttons">
          <button onClick={handleOpenLimit}>
            <p>SetLimit</p>
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
                key = {person.id}
                name={person.name}
                money={person.money}
                isAdmin={person.isAdmin}
              />
            );
          })}
        </div>
      </div>)}
    </div>
  );
}

export default EventInfo;
