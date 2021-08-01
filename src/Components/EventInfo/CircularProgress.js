import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";

function CircularProgress() {
  const [valueEnd, setValueEnd] = React.useState(66);

  return (
    <div className="" style={{ width: 130, height: 130 }}>
      <ProgressProvider valueStart={10} valueEnd={valueEnd}>
        {(value) => (
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "rgb(256,0,87)",
              textSize: "20px",
            })}
          />
        )}
      </ProgressProvider>
    </div>
  );
}

export default CircularProgress;
