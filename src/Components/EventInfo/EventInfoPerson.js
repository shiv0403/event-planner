import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./EventInfoPerson.css";

const useStyles = makeStyles({
  moreVert: {
    marginLeft: "10px",
  },
});

function EventInfoPerson({ name, money }) {
  const classes = useStyles();
  return (
    <div className="eventInfo__person">
      <div className="eventInfo__person__details">
        <Avatar alt={name} src="/static/images/img1.png" />
        <p>{name}</p>
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
