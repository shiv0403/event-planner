import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "./TransferMoney.css";
import { banks } from "../banks";
import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from "@material-ui/core";

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
    height: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "35%",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      // height: "70vh",
    },
  },
  formControl: {
    minWidth: 120,
    width: "100%",
    textAlign: "left",
    margin: "10px auto 40px auto",
  },
  bank__name: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  btn: {
    width: "100%",
    margin: "20px auto",
    border: "1px solid green",
    color: "green",
  },

  input: {
    width: "100%",
    margin: "10px auto",
  },
}));

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, bankName, theme) {
  console.log(name, bankName);
  return {
    fontWeight:
      bankName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function TransferMoney({ open, handleClose }) {
  const classes = useStyles();
  const theme = useTheme();

  const [upi, setUpi] = useState("");
  const [amount, setAmount] = useState();
  const [bankName, setBankName] = React.useState([]);
  const [names, setNames] = useState(banks);
  const [personName, setPersonName] = useState([]);
  const [personNames, setPersonNames] = React.useState([
    "Himalaya Gupta",
    "Priyansh Singh",
    "Naman Agarwal",
    "Aviral Saxena",
    "Shivansh Gupta",
    "Dhiren Chugh",
  ]);

  const handleBank = (event) => {
    setBankName(event.target.value);
  };

  const handlePerson = (event) => {
    setPersonName(event.target.value);
  };

  const handleUpi = (event) => {
    setUpi(event.target.value);
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
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form>
              <div className="transfer__from">
                <div className="transfer__from__details">
                  <p>From</p>
                  <h3>Shivansh Gupta</h3>
                  <TextField
                    name="amount"
                    label="Enter Amount"
                    type="number"
                    required
                    xs={6}
                    value={amount}
                    className={classes.input}
                  />
                </div>
                <div className="transfer__from__bankAcc">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-name-label">
                      Pay using
                    </InputLabel>
                    <Select
                      labelId="demo-mutiple-name-label"
                      id="demo-mutiple-name"
                      value={bankName}
                      onChange={handleBank}
                      input={<Input />}
                      required
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name.bankName}
                          value={name.bankName}
                          // style={getStyles(name.bankName, bankName, theme)}
                        >
                          <div
                            className="transfer__bankOption"
                            style={{ width: "100%" }}
                          >
                            <div className="transfer__bankDetails">
                              <p className={classes.bank__name}>
                                {name.bankName}
                              </p>
                              <p style={{ color: "gray" }}>{name.accNo}</p>
                            </div>
                            <div className="transfer__bankLogo">
                              <Avatar src={name.imgUrl} alt={name.bankName} />
                            </div>
                          </div>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="transfer__to">
                <p>To</p>
                <div className="transfer__to__person">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-name-label">
                      Event's Participants
                    </InputLabel>
                    <Select
                      labelId="demo-mutiple-name-label"
                      id="demo-mutiple-name"
                      value={personName}
                      onChange={handlePerson}
                      input={<Input />}
                      required
                      MenuProps={MenuProps}
                    >
                      {personNames.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <p>Or</p>
                <TextField
                  name="upi"
                  label="UPI of person"
                  xs={6}
                  value={upi}
                  onChange={handleUpi}
                  className={classes.input}
                />
              </div>
              <Button color="primary" className={classes.btn} type="submit">
                Pay
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransferMoney;
