import React, { useState } from "react";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { data } from "./data";
import "./LogFile.css";
import Transaction from "./Transaction";

function LogFile() {
  const [info, setInfo] = useState(data);

  return (
    <div className="logFile__data">
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
  );
}

export default LogFile;
