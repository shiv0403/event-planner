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
        <tr>
          <td>{transaction.from}</td>
          <TrendingFlatIcon />
          <td>{transaction.to}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.date}</td>
        </tr>
      ))}
    </div>
  );
}

export default LogFile;
