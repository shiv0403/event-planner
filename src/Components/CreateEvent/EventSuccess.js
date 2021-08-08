import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    marginTop: "50px",
  },
  image: {
    width: "40%",
    margin: "auto",
    marginTop: "20px",
  },
  eventSuccess__btns: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    marginTop: "10px",
  },
}));

function EventSuccess({ handleClose, step, values, prevStep }) {
  const classes = useStyles();
  const [createEvent, setCreateEvent] = useState(true);

  useEffect(() => {
    console.log(values.eventTitle, values.eventVenue);
    if (
      values.eventTitle === "" ||
      values.eventVenue === "" ||
      values.eventCategory === "" ||
      values.eventDate === ""
    ) {
      setCreateEvent(false);
    }
  }, []);

  const closeEvent = () => {
    handleClose();
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <div className={classes.container}>
      {createEvent ? (
        <>
          <h1 className={classes.heading}>Event Created successfully</h1>
          <img
            src="https://preview.pixlr.com/images/800wm/1256/1/1256102704.jpg"
            alt=""
            className={classes.image}
          />
          <Button
            color="primary"
            className={classes.button}
            onClick={closeEvent}
          >
            CLOSE
          </Button>
        </>
      ) : (
        <>
          <h1 className={classes.heading}>Please fill all of the Details</h1>
          <img
            src="https://previews.123rf.com/images/ppbig/ppbig1801/ppbig180100142/94814236-red-wrong-mark.jpg"
            alt=""
            className={classes.image}
          />
          <div className={classes.eventSuccess__btns}>
            <Button
              color="secondary"
              onClick={handlePrev}
              className={classes.button}
            >
              Prev
            </Button>
            <Button
              color="primary"
              className={classes.button}
              onClick={closeEvent}
            >
              Close
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default EventSuccess;
