import React, { useState } from "react";

import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@material-ui/core";
import useStyle from "./styles";

function EventDetails({
  nextStep,
  handleChange,
  values,
  handleChangeCategory,
}) {
  const classes = useStyle();
  const [isMoney, setIsMoney] = useState(true);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNext = () => {
    nextStep();
  };

  const handleCheck = (check) => {
    for (var i = 1; i <= 5; ++i) {
      if (i !== check) {
        if (i === 1) {
          setChecked1(0);
        } else if (i === 2) {
          setChecked2(0);
        } else if (i === 3) {
          setChecked3(0);
        } else if (i === 4) {
          setChecked4(0);
        } else {
          setChecked5(0);
        }
      }
    }
    handleChangeCategory(check);
  };

  return (
    <div className={classes.body}>
      <Avatar className={classes.avatar} />
      <Grid container spacing={2}>
        <TextField
          name="eventTitle"
          label="Event Title"
          onChange={handleChange("eventTitle")}
          xs={6}
          varient="outlined"
          fullWidth
          required
          className={classes.input}
          defaultValue={values.eventTitle}
        />
        <div className={classes.root}>
          <h2 className={classes.heading}>Type Of event</h2>
          <FormControl component="fieldset" className={classes.categories}>
            <FormGroup className={classes.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked1}
                    onChange={() => {
                      setChecked1((prev) => !prev);
                      handleCheck(1);
                    }}
                    name="checkedB"
                    color="primary"
                    defaultValue={values.eventCategory}
                  />
                }
                label="Party"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked2}
                    onChange={() => {
                      setChecked2((prev) => !prev);
                      handleCheck(2);
                    }}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Trip"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked3}
                    onChange={() => {
                      setChecked3((prev) => !prev);
                      handleCheck(3);
                    }}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Wedding"
              />
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.categories}>
            <FormGroup className={classes.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked4}
                    onChange={() => {
                      setChecked4((prev) => !prev);
                      handleCheck(4);
                    }}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Project"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked5}
                    onChange={() => {
                      setChecked5((prev) => !prev);
                      handleCheck(5);
                    }}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Other"
              />
            </FormGroup>
          </FormControl>
        </div>

        <TextField
          name="eventDate"
          onChange={handleChange("eventDate")}
          xs={6}
          type="date"
          varient="outlined"
          fullWidth
          required
          defaultValue={values.eventDate}
        />

        <TextField
          name="eventVenue"
          label="Event Venue"
          onChange={handleChange("eventVenue")}
          xs={6}
          varient="outlined"
          fullWidth
          required
          className={classes.input}
          defaultValue={values.eventVenue}
        />

        <TextField
          name="eventBudegt"
          label="Event Budget"
          onChange={handleChange("eventBudget")}
          varient="outlined"
          fullWidth
          required
          type="number"
          className={classes.input}
          defaultValue={values.eventBudget}
        />
      </Grid>
      <Button color="primary" className={classes.button} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default EventDetails;
