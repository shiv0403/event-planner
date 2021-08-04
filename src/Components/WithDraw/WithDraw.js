import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { Button, TextField } from "@material-ui/core";

import "./WithDraw.css";

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
    borderRadius: "10px",
    width: "30%",
  },
  walletIcon: {
    fontSize: "2.8rem",
  },
  withDraw: {
    margin: theme.spacing(3, 0, 3),
  },
  btn: {
    width: "100%",
    marginBottom: "20px",
    border: "1px solid green",
    color: "green",
  },
}));

function WithDraw() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [money, setMoney] = React.useState(0);

  const handleChange = (e) => {
    setMoney(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <div className="withDraw">
              <div className="withDraw__header">
                <div className="withDraw__details">
                  <p>Withdraw Money from</p>
                  <h3 style={{ color: "black" }}>Priyansh's Birthday</h3>
                  <p>
                    Current Budget: <b style={{ color: "black" }}>$50000</b>
                  </p>
                </div>
                <div className="withDraw__icon">
                  <AccountBalanceWalletIcon className={classes.walletIcon} />
                </div>
              </div>
              <div className="withDraw__body">
                <TextField
                  name="withDraw"
                  label="Withdraw Amount"
                  type="number"
                  xs={6}
                  fullWidth
                  onChange={handleChange}
                  value={money}
                  className={classes.withDraw}
                />
              </div>
              <div className="withDraw__addButton">
                <Button color="primary" className={classes.btn}>
                  Withdraw from Budget
                </Button>
              </div>
              <div className="withDraw__note">
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

export default WithDraw;
