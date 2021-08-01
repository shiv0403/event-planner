import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    marginTop: "120px",
  },
  image: {
    width: "40%",
    margin: "auto",
    marginTop: "20px",
  },
  button: {
    marginTop: "10px",
    border: "1px solid blue",
    width: "30%",
  },
}));

function EventSuccess({ handleClose, step }) {
  const classes = useStyles();

  const closeEvent = () => {
    handleClose();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Event Created successfully</h1>
      <img
        src="https://preview.pixlr.com/images/800wm/1256/1/1256102704.jpg"
        alt=""
        className={classes.image}
      />
      <Button color="primary" className={classes.button} onClick={closeEvent}>
        CLOSE
      </Button>
    </div>
  );
}

export default EventSuccess;
