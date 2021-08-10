import React, { useState } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import SearchPerson from "./InvitePerson";

import "./InviteModal.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 750,
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
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    // width: "40%",
    borderRadius: "10px",
    height: "80vh",
    [theme.breakpoints.down("lg")]: {
      width: "35%",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      height: "70vh",
    },
  },
}));

export default function InviteModal({ open, handleOpen, handleClose }) {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
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
    }
  ]);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const close = () => {
    handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="search__header">
              <input type="text" placeholder="Search by Name or Email" />
              {/* <button type="submit"> Search</button> */}
            </div>
            <div className="search__body">
              {data.map((person) => (
                <SearchPerson
                  name={person.name}
                  email={person.email}
                  key={person.email}
                />
              ))}
            </div>
            <div className="search__footer">
              <div className="search__footer__link">
                <p>https://invitelinke.com</p>
                <FileCopyIcon />
              </div>

              {/* <button type="submit">Share</button> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}