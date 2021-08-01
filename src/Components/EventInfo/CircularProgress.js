import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";

function CircularProgress() {
  const [valueEnd, setValueEnd] = React.useState(66);

  return (
    <div className="" style={{ width: 100, height: 100 }}>
      <ProgressProvider valueStart={10} valueEnd={valueEnd}>
        {(value) => (
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              textColor: "green",
              pathColor: "#244ed8",
              trailColor: "#ddd",
              textSize: "20px",
            })}
          />
        )}
      </ProgressProvider>
    </div>
  );
}

export default CircularProgress;
