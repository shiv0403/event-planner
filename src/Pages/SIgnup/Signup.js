import {
  Avatar,
  Button,
  Grid,
  Container,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";

import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import Icon from "./Icon.js";

import useStyle from "./styles.js";

const initialState = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const classes = useStyle();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [checked, setChecked] = useState(false);

  const sample = () => {};
  const handleSubmit = () => {};
  const handleCheck = () => {
    setChecked((prev) => !prev);
  };
  const handleChange = (e) => {
    console.log("This is change function");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSwitch = () => {
    console.log("clicked");
    history.push("/signup");
  };

  const handleShowPassword = () => {
    setShowPassword((prevPass) => !prevPass);
  };

  const googleSuccess = async () => {
    console.log("Success Login");
    history.push("/");
  };

  const googleFailure = (err) => {
    console.log(err);
    console.log("Google sign in was unsuccessful. Try again later!");
  };

  return (
    <div className={classes.body}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>EP</Avatar>
          <h2>Event Planner</h2>
          <Typography varient="h4">Lorem ipsum dolor sit.</Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <TextField
                name="name"
                label="Name"
                handleChange={handleChange}
                xs={6}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
              />
              <TextField
                name="phone"
                label="Mobile No."
                handleChange={handleChange}
                xs={6}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
              />
              <TextField
                name="email"
                label="Email Address"
                type="email"
                handleChange={handleChange}
                xs={6}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
              />
              <TextField
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                xs={6}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
              />

              <TextField
                name="confPassoword"
                label="Confirm Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                xs={6}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              varient="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>

            <GoogleLogin
              clientId="1013694804754-kb1hoogefdr2rtp4ll9jf8pj986jkj0e.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  varient="contained"
                >
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />

            <Grid container justify="center">
              <Grid item>
                <Button
                  fullWidth
                  varient="contained"
                  color="secondary"
                  onClick={handleSwitch}
                >
                  Have an account? Log In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Signup;
