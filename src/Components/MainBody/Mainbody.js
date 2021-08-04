import React, { useState, useEffect } from "react";
import "./Mainbody.css";
import CardScroller from "../CardScroller/CardScroller";
import axios from "axios";
import { Translate } from "@material-ui/icons";

function Mainbody() {
  const [liveEvents, setLiveEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      const liveEventsData = axios.get("./events.json");
      const completedEventsData = axios.get("./events.json");
      setLoader(true);
      setTimeout(() => {
        Promise.all([liveEventsData, completedEventsData]).then((values) => {
          setLiveEvents(values[0].data);
          setCompletedEvents(values[0].data);
          setLoader(false);
        });
      }, 2000);
    }
    fetchEvents();
  }, []);

  return (
    <div
      style={
        loader
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }
          : {}
      }
    >
      {loader ? (
        <img
          src="loaderWifi.gif"
          style={{ width: "80px", height: "80px" }}
        ></img>
      ) : (
        <div className="mainBody">
          <div className="eventCardContainer" style={{ marginTop: "15px" }}>
            <h4 className="eventsCollectionName">Live Events</h4>
            <CardScroller events={liveEvents} />
          </div>
          <div
            className="eventCardContainer"
            style={{ marginTop: "40px", marginBottom: "60px" }}
          >
            <h4 className="eventsCollectionName">Completed Events</h4>
            <CardScroller events={completedEvents} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainbody;
