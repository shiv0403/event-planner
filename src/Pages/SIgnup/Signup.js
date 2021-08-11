import {
  Avatar,
  Button,
  Grid,
  Container,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";

import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import Icon from "./Icon.js";
import { useDispatch, useSelector } from 'react-redux'
import useStyle from "./styles.js";
import { Link } from "react-router-dom";
import { registerUser } from "../../Actions/UserActions.js";





function Signup() {
  const [name, setname] = useState('');
const [phone, setphone] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [confirmPassword, setconfirmPassword] = useState('');
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);


  const userLogin = useSelector(state => state.userRegister);
  const {userInfo} = userLogin;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && email !== '' && phone.length >= 10 && phone.length <=12 && password === confirmPassword && password.length >= 8){
      dispatch(registerUser(name,phone,email,password));
    }else{
      alert('Form Error');
    }
  };
  
  useEffect(() => {
    if(userInfo){
      history.push('/');
    }
  },[history,userInfo])


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
                xs={6}
                onInput = {(e) => setname(e.target.value)}
                varient="outlined"
                fullWidth
                value ={name}
                required
                className={classes.input}
              />
              <TextField
                name="phone"
                label="Mobile No."
                xs={6}
                onInput = {(e) => setphone(e.target.value)}
                value ={phone}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
              />
              <TextField
                name="email"
                label="Email Address"
                type="email"
                xs={6}
                onInput = {(e) => setemail(e.target.value)}
                value ={email}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
              />
              <TextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                xs={6}
                onInput = {(e) => setpassword(e.target.value)}
                value ={password}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
              />

              <TextField
                name="confPassoword"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                xs={6}
                onInput = {(e) => setconfirmPassword(e.target.value)}
                value ={confirmPassword}
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
              <Link to="/login" style={{textDecoration:"none"}}>
                <Button
                  fullWidth
                  varient="contained"
                  color="secondary"
                  style={{textTransform:"None"}}
                >
                  Have an account? Log In
                </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Signup;
