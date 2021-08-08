import {
  Avatar,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";

import { makeStyles, createTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "./Profile.css";
import { banks } from "../../Components/banks";

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
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "auto",
    borderRadius: "20px",
    [theme.breakpoints.down("lg")]: {
      width: "35%",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  formControl: {
    minWidth: 120,
    width: "100%",
    textAlign: "left",
    margin: "10px auto 0px auto",
  },
  bankAdd__input: {
    marginTop: "20px",
  },
  btn: {
    width: "100%",
    border: "1px solid blue",
    marginTop: "30px",
  },
  bankAdd__name: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
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

function Profile() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [bankName, setBankName] = React.useState([]);

  const handleBank = (event) => {
    setBankName(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="profile__main">
      <div className="profile">
        <div className="profile__img">
          <img
            src="https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg"
            alt="Elon Musk"
          />
        </div>
        <div className="profile__edit">
          <h1>Profile</h1>
          <button>Edit Profile</button>
        </div>

        <div className="profile__details">
          <div className="profile__name">
            <p>Name</p>
            <p>Elon Musk</p>
          </div>
          <div className="profile__email">
            <p>Email</p>
            <p>elonmusk@gmail.com</p>
          </div>
          <div className="profile__phone">
            <p>Phone No.</p>
            <p>1234567890</p>
          </div>
          <div className="profile__totalEvents">
            <p>Total Events</p>
            <p>6</p>
          </div>
          <div className="profile__currentEvents">
            <p>Current Events</p>
            <p>2</p>
          </div>
          <div className="profile__completedEvents">
            <p>Completed Events</p>
            <p>3</p>
          </div>
        </div>
      </div>
      <div className="bankAcc">
        <div className="bank__add">
          <h1>Your Bank Accounts</h1>
          <button onClick={handleOpen}>Add Bank Acc</button>
        </div>

        <Grid>
          {open && (
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
                    {/* choose bank acc */}
                    <form>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-name-label">
                          Choose Bank
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
                          {banks.map((name) => (
                            <MenuItem
                              key={name.bankName}
                              value={name.bankName}
                              // style={getStyles(name.bankName, bankName, theme)}
                            >
                              <div
                                className="bankAdd__select"
                                style={{ width: "100%" }}
                              >
                                <div className={classes.bankAdd__name}>
                                  <p>{name.bankName}</p>
                                </div>
                                <div className="transfer__bankLogo">
                                  <Avatar
                                    src={name.imgUrl}
                                    alt={name.bankName}
                                  />
                                </div>
                              </div>
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <TextField
                        xs={6}
                        type="number"
                        name="accNo"
                        fullWidth
                        label="Acc No."
                        className={classes.bankAdd__input}
                        required
                      />
                      <TextField
                        xs={6}
                        type="number"
                        name="ifsc"
                        fullWidth
                        label="IFSC Code"
                        className={classes.bankAdd__input}
                        required
                      />

                      <TextField
                        xs={6}
                        type="text"
                        name="upi"
                        fullWidth
                        label="Upi ID"
                        className={classes.bankAdd__input}
                      />

                      <Button
                        color="primary"
                        className={classes.btn}
                        type="submit"
                      >
                        Add Account
                      </Button>
                    </form>
                  </div>
                </Fade>
              </Modal>
            </div>
          )}
        </Grid>

        <div className="bankAcc__container">
          {banks.map((bank) => (
            <div className="bank__main">
              <div className="bank__details">
                <Avatar
                  alt={bank.bankName}
                  src={bank.imgUrl}
                  className="bank__img"
                />
                <div className="bank__name">
                  <h3>{bank.bankName}</h3>
                  <p>{bank.accNo}</p>
                </div>
              </div>
              <div className="bank__delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
