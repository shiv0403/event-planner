import React from "react";
import "./TaskContainer.css";
import TaskCard from "../TaskCard/TaskCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "../EventInfo/CircularProgress";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import BarChart from "../Charts/BarChart";

function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchTasks() {
      setLoader(true);
      setTimeout(async()=>{
        const { data } = await axios.get("./Tasks.json");
        console.log(data);
        setTasks(data);
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
      {Loader ? (
        <img
          src="loaderWifi.gif"
          style={{ width: "80px", height: "80px" }}
        ></img>
      ) : (
        <div style={{ backgroundColor: "white" }}>
          <div className="eventInfo__budget">
            <div className="eventInfo__budget__main">
              {/* <div className="eventInfo__budget__details">
                <p>Total Budget</p>
                <h3>$12000</h3>
                <br />
                <p>Budget remaining</p>
                <h4>$4000</h4>
              </div> */}
              <div className="evenInfo__budget__circular">
                {/* <BarChart/> */}
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
            <p>20 Tasks</p>
          </div>
          <div className="tasksList">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskContainer;
