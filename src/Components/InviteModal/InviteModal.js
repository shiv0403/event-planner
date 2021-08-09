import React, { useState } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import SearchPerson from "./InvitePerson";

import "./InviteModal.css";
import axios from "axios";

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
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [Loader, setLoader] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const close = () => {
    handleClose();
  };
  const performLiveSearch = async (searchText) => {
    if (searchText.length === 1) {
      console.log("request");
      setLoader(true);
        const response = await axios.get("./searchPeople.json");
        setUsers(response.data);
        setLoader(false);
    }
    let matches = users.filter((user) => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return user.name.match(regex) || user.email.match(regex);
    });
    setSearchResults(matches);
    
  };
  const handleLiveUserSearch = (e) => {
    setSearchText(e.target.value);
    performLiveSearch(e.target.value);
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
          <div className={classes.paper} style={{ position: "relative" }}>
            <div className="search__header">
              <input
                type="text"
                onInput={handleLiveUserSearch}
                value={searchText}
                placeholder="Search Users by Name or Email"
              />
            </div>
            <div
              style={
                Loader
                  ? {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }
                  : {}
              }
            >
              {Loader ? (
                <img
                  src="loaderWifiWhiteBg.gif"
                  style={{ width: "80px", height: "80px" }}
                ></img>
              ) : (
                <div className="search__body">
                  {searchResults.length != 0 ? (
                    searchResults.map((person) => (
                      <SearchPerson
                        name={person.name}
                        email={person.email}
                        key={person.id}
                      />
                    ))
                  ) : users.length !=0 ? (
                    <p
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        textAlign: "center",
                        color: "#707070",
                        transform: "translateX(-50%)",
                      }}
                    >
                      No User Found with Keyword "{searchText}"
                    </p>
                  ) : (
                    <p
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        textAlign: "center",
                        color: "#707070",
                        transform: "translateX(-50%)",
                      }}
                    >
                      Search Results would Appear Here...
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="search__footer">
              <div className="search__footer__link">
                <p>https://invitelinke.com</p>
                <FileCopyIcon />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
