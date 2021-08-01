import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import AddPerson from "./AddPerson";

import "./AddPeople.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    width: "40%",
    borderRadius: "10px",
    height: "85%",
  },
}));

export default function AddPeople({ formData, prevStep, nextStep }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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
    },
    {
      name: "asdlkfj lskdjf",
      email: "sadlkfj@lskdf.com",
    },

    {
      name: "asdlkfj lskdjf",
      email: "sadlkfj@lskdf.com",
    },
    {
      name: "asdlkfj lskdjf",
      email: "sadlkfj@lskdf.com",
    },
    {
      name: "asdlkfj lskdjf",
      email: "sadlkfj@lskdf.com",
    },
    {
      name: "asdlkfj lskdjf",
      email: "sadlkfj@lskdf.com",
    },
    {
      name: "asdlkfj lskdjf",
      email: "sadlkfj@lskdf.com",
    },
  ]);

  const handlePrev = () => {
    prevStep();
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="add__people">
      <div className="add__header">
        <input type="text" placeholder="Search by Name or Email" />
      </div>
      <div className="add__body">
        {data.map((person) => (
          <AddPerson name={person.name} email={person.email} />
        ))}
      </div>
      <div className="add__footer">
        <div className="add__footer__link">
          <p>https://invitelinke.com</p>
          <FileCopyIcon />
        </div>
      </div>
      <div className="add__buttons">
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
