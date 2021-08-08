import {
  Avatar,
  Fade,
  IconButton,
  makeStyles,
  Modal,
  createTheme,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import Backdrop from "@material-ui/core/Backdrop";

import "./Transaction.css";
import shivansh from "./shivansh.png";

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
    outline: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
    width: "30%",
    borderRadius: "20px",
    [theme.breakpoints.down("lg")]: {
      width: "30%",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  moreVert: {
    marginLeft: "10px",
  },
  personIcon: {
    color: "#707070",
    marginLeft: "7px",
    height: "20px",
  },
  modalAvatar: {
    width: "70px",
    height: "70px",
    margin: "auto",
  },
}));

function Transaction({ from, task, amount, date, to }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="transaction">
      <div className="transaction__details">
        <Avatar alt={from} src={shivansh} />
        <div className="transaction__task">
          <h3>{task}</h3>
          <p>{date}</p>
        </div>
      </div>

      {open && (
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
              <div className="transDetails">
                <div className="transDetails__person">
                  <Avatar
                    className={classes.modalAvatar}
                    alt={from}
                    src={shivansh}
                  />
                  <h3>{task}</h3>
                  <p>{from} completed this task</p>
                </div>
                <div className="transDetails__upper">
                  <div className="transDetails__amount">
                    <h3>Money Paid</h3>
                    <h2>${amount}</h2>
                    <p>20 Dec 2021, 12:55PM</p>
                  </div>
                  <div className="transDetails__img">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png"
                      alt="money_paid"
                    />
                  </div>
                </div>
                <div className="transDetails__body">
                  <div className="transDetails__to">
                    <div className="transDetails__to__details">
                      <p>TO</p>
                      <h3>Google Pay</h3>
                      <h4>googlepay@axixbank</h4>
                    </div>
                    <div className="transDetails__to__img">
                      <Avatar src="/" alt={to} />
                    </div>
                  </div>
                  <div className="transDetails__from">
                    <div className="transDetails__from__details">
                      <p>FROM</p>
                      <h3>Bank of India</h3>
                      <h4>A/c No. XXXX XXXX XXX6 340</h4>
                    </div>
                    <div className="transDetails__from__img">
                      <Avatar src="/" alt={from} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      )}

      <div className="transaction__money">
        <p>${amount}</p>
        <IconButton className={classes.moreVert}>
          <InfoIcon onClick={handleOpen} />
        </IconButton>
      </div>
    </div>
  );
}

export default Transaction;
