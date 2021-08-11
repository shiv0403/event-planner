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

import "./EventDetails.css";
import axios from "axios";

function EventDetails({
  nextStep,
  handleChange,
  values,
  handleChangeCategory,
}) {
  const classes = useStyle();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [Profile, setProfile] = useState(false);
  const showProfilePic = (e) =>  {
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    let newImg = e.target.value.replace(/^.*\\/,"");
     setProfile(url);
  }
  const handleNext = async () => {
    try {
      setIsDisabled(true);
      // const response =  await axios.post();
      nextStep();
    }catch(e){
      alert(e.message)
    }
    setIsDisabled(false);
  };

 

  const handleCheck = (check) => {
    for (var i = 1; i <= 6; ++i) {
      if (i !== check) {
        if (i === 1) {
          setChecked1(0);
        } else if (i === 2) {
          setChecked2(0);
        } else if (i === 3) {
          setChecked3(0);
        } else if (i === 4) {
          setChecked4(0);
        } else if (i === 5) {
          setChecked5(0);
        } else {
          setChecked6(0);
        }
      }
    }
    handleChangeCategory(check);
  };

  return (
    <div className="eventDetails">
      <FormControl>
        <label htmlFor="chooseProfileImage"  >
          <div title="Choose Profile Image" style={{position:"relative", cursor:"pointer", width:"80px", height:"80px", borderRadius:"50%", background:"gray", marginLeft:"auto",marginRight:"auto"}}>
            <i className="fa fa-camera" style={!Profile ? {position:"absolute",top:"50%",left:"50%", transform:"translate(-50%,-50%)", fontSize:"30px",color:"white"}: {}}></i>
             {/* <p className="" style={{position:"absolute", top:"40%", left:"120%", fontSize:"14px"}}>{Profile}</p> */}
             <img src={Profile} style ={Profile ? {position:"absolute",top:"50%",left:"50%", transform:"translate(-50%,-50%)", width:"80px",height:"80px",borderRadius:"50%"} : {}} alt="" />
          </div>
        </label>
        <input type="file" onChange = {(e) => showProfilePic(e)} accept="image/*" name="" id="chooseProfileImage" style={{visibility:"none",display:"none"}} />
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
            <h2 className={classes.eventDetails__typeHeading}>Type Of event</h2>
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
                  className={classes.check}
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
                      checked={checked6}
                      onChange={() => {
                        setChecked6((prev) => !prev);
                        handleCheck(6);
                      }}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Seminar"
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
            type="text"
            onFocus = {(e) => e.target.type = "date"}
            varient="outlined"
            fullWidth
            placeholder="Choose Event End Date"
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
        </Grid>
        <Button
          color="primary"
          className={classes.button}
          onClick={handleNext}
          type="submit"
          style = {isDisabled ? {pointerEvents:"none",color:"gray"} : {}}
        >
          Next
        </Button>
      </FormControl>
    </div>
  );
}

export default EventDetails;
