import React, { useState } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Button } from "@material-ui/core";
import SearchPerson from '../InviteModal/InvitePerson'
import "../InviteModal/InvitePerson.css";
import axios from "axios";
import './AddPeople.css';
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
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "70vh",
    },
  },
}));


export default function AddPeople({ formData, prevStep, nextStep }) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [Loader, setLoader] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const handlePrev = () => {
    prevStep();
  };

  const handleNext = () => {
    nextStep();
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
    <div className="add__people">
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
            <div className="search__footer add__footer">
            <div className="add__footer__link">
              <p>https://invitelinke.com</p>
              <FileCopyIcon />
             </div>
            </div>
          </div>
      <div className="add__buttons" style={{display:"flex", justifyContent:"center"}}>
        <Button color="secondary" onClick={handlePrev}>
          Prev
        </Button>
        <Button color="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}


