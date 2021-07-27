import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SearchPerson from "./SearchPerson";

import "./SearchModal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "30%",
    height: "50%",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    {
      name: "Shivansh Gupta",
      email: "shivanshgupta@gmail.com",
    },
    {
      name: "Himalaya Gupta",
      email: "himalayagupta@gmail.com",
    },
    {
      name: "Priyansh Singh",
      email: "priyanshsingh@gmail.com",
    },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Search
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
            <div className="search__header">
              <input type="text" />
              <button type="submit"> Search</button>
            </div>
            <div className="search__body">
              {data.map((person) => (
                <SearchPerson name={person.name} email={person.email} />
              ))}
            </div>
            <div className="search__footer">
              <p>https://invitelinke.com</p>
              <button type="submit">Share</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
