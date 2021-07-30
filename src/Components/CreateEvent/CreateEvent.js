import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import AddPeople from "./AddPeople";
import EventDetails from "./EventDetails";
import EventSuccess from "./EventSuccess";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "50%",
    borderRadius: "10px",
    height: "88vh",
  },
}));

const CreateEvent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventVenue: "",
    eventImage: "",
    eventCategory: "",
    eventBudget: {
      type: Number,
    },
    eventDate: {
      type: Date,
    },
  });

  //next form
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  //prev form
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setFormData(...formData, ([e.target.name] = e.target.value));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(function () {
      setStep(1);
    }, 700);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
            {/* main code */}
            {step === 1 && (
              <EventDetails
                nextStep={nextStep}
                handleChange={handleChange}
                formData={formData}
              />
            )}
            {step === 2 && (
              <AddPeople
                prevStep={prevStep}
                nextStep={nextStep}
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {step === 3 && <EventSuccess handleClose={handleClose} />}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateEvent;
