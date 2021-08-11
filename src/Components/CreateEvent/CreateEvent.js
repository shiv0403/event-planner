import React, { useState } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import AddPeople from "./AddPeople";
import EventDetails from "./EventDetails";
import EventSuccess from "./EventSuccess";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      es: 420,
      sm: 550,
      md: 770,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ddd",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "40%",
    borderRadius: "10px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("es")]: {
      width: "100%",
    },
  },
}));

const CreateEvent = ({ open, handleAddEvent }) => {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const [eventTitle, setEventTitle] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventBudget, setEventBudget] = useState("");
  const [eventDate, setEventDate] = useState("");

  const values = {
    eventTitle,
    eventVenue,
    eventImage,
    eventCategory,
    eventBudget,
    eventDate,
  };



  const nextStep = () => {
    console.log(values);
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (input) => (e) => {
    if (input === "eventTitle") {
      setEventTitle(e.target.value);
    }
    if (input === "eventVenue") {
      console.log(e.target.value);
      setEventVenue(e.target.value);
    }
    if (input === "eventImage") {
      setEventImage(e.target.value);
    }
    if (input === "eventCategory") {
      console.log(input);
      setEventCategory(e.target.value);
    }
    if (input === "eventBudget") {
      setEventBudget(e.target.value);
    }
    if (input === "eventDate") {
      setEventDate(e.target.value);
    }
  };

  const handleChangeCategory = (e) => {
    console.log(e);
    setEventCategory(e);
  };

  const handleClose = () => {
    handleAddEvent();
    setTimeout(function () {
      setStep(1);
    }, 700);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          
          <div className={classes.paper}>
            {step === 1 && (
              <EventDetails
                nextStep={nextStep}
                handleChange={handleChange}
                handleChangeCategory={handleChangeCategory}
                values={values}
              />
            )}
            {step === 2 && (
              <AddPeople
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
              />
            )}
            {step === 3 && (
              <EventSuccess
                handleClose={handleClose}
                values={values}
                prevStep={prevStep}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateEvent;
