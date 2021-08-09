import React from "react";
import { useState,useEffect } from "react";
import CircularProgress from "./CircularProgress";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

import "./EventInfo.css";
import EventInfoPerson from "./EventInfoPerson";
import axios from "axios";

function EventInfo() {
  const [Loader, setLoader] = useState(false);
  const [people, setPeople] = useState([]);
   

  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchTasks() {
      setLoader(true);
      setTimeout(async()=>{
        const { data } = await axios.get("./people.json");
        console.log(data);
        setPeople(data);
        setLoader(false);
      },500)
      
    }
    fetchTasks();
    return () => {
      source.cancel();
    };
  }, []);

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
          <p>
            <i className="fa fa-user-plus"></i>
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
