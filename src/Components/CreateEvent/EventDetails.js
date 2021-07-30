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

function EventDetails({ nextStep, handleChange, formData }) {
  const classes = useStyle();
  const [isMoney, setIsMoney] = useState(true);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className={classes.body}>
      <Avatar className={classes.avatar} />
      <Grid container spacing={2}>
        <TextField
          name="eventTitle"
          label="Event Title"
          onChange={handleChange}
          xs={6}
          varient="outlined"
          fullWidth
          required
          className={classes.input}
          value={formData.eventTitle}
        />
        <div className={classes.root}>
          <h2 className={classes.heading}>Type Of event</h2>
          <FormControl component="fieldset" className={classes.categories}>
            <FormGroup className={classes.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Party"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Trip"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
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
                    checked={checked}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Project"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
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
          onChange={handleChange}
          xs={6}
          type="date"
          varient="outlined"
          fullWidth
          required
          value={formData.eventDate}
        />

        <TextField
          name="eventVenue"
          label="Event Venue"
          onChange={handleChange}
          xs={6}
          varient="outlined"
          fullWidth
          required
          className={classes.input}
          value={formData.eventVenue}
        />

        <TextField
          name="eventBudegt"
          label="Event Budget"
          onChange={handleChange}
          varient="outlined"
          fullWidth
          required
          type="amount"
          className={classes.input}
          value={formData.eventBudget}
        />
      </Grid>
      <Button color="primary" className={classes.button} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default EventDetails;
