import React, { useState,useEffect } from "react";
import "./LogFile.css";
import Transaction from "./Transaction";
import axios from "axios";
import PerDayTransaction from '../Charts/PerDayTransaction'
import PerPersonTransaction from '../Charts/PerPersonTransaction'


function LogFile() {
  const [info, setInfo] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [firstChart, setFirstChart] = useState(true);
  const [secondChart, setSecondChart] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchTransactions() {
      setLoader(true);
        const { data } = await axios.get("./data.json");
        console.log(data);
        setInfo(data);
        setLoader(false);
      
    }
    fetchTransactions();
    return () => {
      source.cancel();
    };
  }, []);

  const showFirstChart = () => {
    setFirstChart(true);
    setSecondChart(false);
  }
  const showSecondChart = () => {
    setFirstChart(false);
    setSecondChart(true);
  }

  return (
    <div  style={
      Loader
        ? {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }
        : {}
    }>
    {Loader ? (
        <img
          src="loaderWifi.gif"
          style={{ width: "80px", height: "80px" }}
        ></img>
      ) : (<div className="logFile__data">
       <div className="eventInfo__budget">
        <div className="chartContainer">
          {firstChart ? <PerDayTransaction/> : ( 
          
          <div className="perPersonDetail">
            <div className="eventInfo__budget__details">
              <p>Total Budget</p>
              <h3>$12000</h3>
              <br />
              <p>Budget remaining</p>
              <h4>$4000</h4>
            </div>
            <PerPersonTransaction/>
          </div>
          )}
        </div>
        <div className="switchCharts">
         <button className={firstChart ? "perDay active" : "perDay"} onClick={showFirstChart}><p>View Per Day </p> 
          <img src="perDay.svg" style={{width:"15px", height:"15px"}} alt="" />
         </button>
         <button className={secondChart ? "perPerson active" : "perPerson"} onClick={showSecondChart}><p>View Per Person</p>
         <img src="perPerson.svg" style={{width:"23px", height:"23px"}} alt="" />
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
         key={transaction.id}
          from={transaction.from}
          amount={transaction.amount}
          task={transaction.task}
          date={transaction.date}
          to={transaction.to}
        />
      ))}
      </div>
    </div>)}
    </div>
  );
}

export default LogFile;
