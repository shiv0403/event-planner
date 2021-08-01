import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonIcon from "@material-ui/icons/Person";

import "./EventInfoPerson.css";

const useStyles = makeStyles({
  moreVert: {
    marginLeft: "10px",
  },
  personIcon: {
    color: "#707070",
    marginLeft: "7px",
    height: "20px",
  },
});

function EventInfoPerson({ name, money, isAdmin }) {
  const classes = useStyles();
  return (
    <div className="eventInfo__person">
      <div className="eventInfo__person__details">
        <Avatar alt={name} src="/static/images/img1.png" />
        <p>{name}</p>
        {isAdmin && <PersonIcon className={classes.personIcon} />}
      </div>

      <div className="eventInfo__person__money">
        <p>${money}</p>
        <IconButton className={classes.moreVert}>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default EventInfoPerson;
