import React, { useState } from "react";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { data } from "./data";
import "./LogFile.css";
import Transaction from "./Transaction";
import CircularProgress from '../EventInfo/CircularProgress';
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

function LogFile() {
  const [info, setInfo] = useState(data);

  return (
    <div className="logFile__data">
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
         <p>20 Transactions</p>
         {/* <p><i className="fa fa-user-plus"></i></p> */}
       </div>
      <div className="transactionLogsContainer">
      {info.map((transaction) => (
        <Transaction
          from={transaction.from}
          amount={transaction.amount}
          task={transaction.task}
          date={transaction.date}
          to={transaction.to}
        />
      ))}
      </div>
    </div>
  );
}

export default LogFile;
