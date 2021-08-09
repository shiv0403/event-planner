import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";

import "./AddMoney.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "30%",
    // height: "40vh",
    [theme.breakpoints.down("lg")]: {
      width: "30%",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      padding: "20px",
      // height: "70vh",
    },
  },
  walletIcon: {
    fontSize: "2.8rem",
  },
  addMoney: {
    margin: theme.spacing(3, 0, 3),
  },
  btn: {
    width: "100%",
    marginBottom: "20px",
    border: "1px solid green",
    color: "green",
  },
}));

function AddMoney({ open, handleClose }) {
  const classes = useStyles();
  const [money, setMoney] = useState(0);

  const handleChange = (e) => {
    setMoney(e.target.value);
  };

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
            <div className="addMoney">
              <div className="addMoney__header">
                <div className="addMoney__details">
                  <p>Set Limit to</p>
                  <h3 style={{ color: "black" }}>Priyansh's Birthday</h3>
                  <p>
                    Current Budget: <b style={{ color: "black" }}>$50000</b>
                  </p>
                </div>
                <div className="addMoney__icon">
                  <AccountBalanceWalletIcon className={classes.walletIcon} />
                </div>
              </div>
              <div className="addMoney__body">
                <TextField
                  name="addMoney"
                  label="Set your Personal Limit"
                  type="number"
                  xs={6}
                  fullWidth
                  onChange={handleChange}
                  value={money}
                  className={classes.addMoney}
                />
              </div>
              <div className="addMoney__addButton">
                <Button color="primary" className={classes.btn}>
                  Add to Budget
                </Button>
              </div>
              <div className="addMoney__note">
                <p>
                  <b style={{ color: "black" }}>Note: </b>Limit Means the max
                  amount of money you are willing to spend. While Paying for a
                  certain task, money will be directly deducted from your bank
                  accounts under limit constraints
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddMoney;
