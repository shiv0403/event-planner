import {
  Avatar,
  Button,
  Grid,
  Container,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import Icon from "./Icon.js";
import { useDispatch, useSelector } from 'react-redux'

import useStyle from "./styles.js";
import { Link } from "react-router-dom";
import { loginUser } from '../../Actions/UserActions'
import { useEffect } from "react";

function Login() {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');   
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const handleCheck = (e) => {
    setChecked(!Boolean(e.target.value));
    if (Boolean(e.target.value)) {
      setEmail('sample@gmail.com');
      setPassword('sampleacc');
    } else {
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    if(userInfo){
      history.push('/');
    }
  },[history,userInfo])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (email !== '' && password !== '' && password.length > 8){
      dispatch(loginUser(email,password));
    }else{
      alert('Login failed')
    }
  }

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
            autoComplete="on"
          >
            <Grid container spacing={2}>
              <TextField
                name="email"
                label="Email Address"
                type="email"
                onInput={(e) => setEmail(e.target.value)}
                xs={6}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
                value={email}
              />
              <TextField
                name="password"
                label="password"
                onInput = {(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                xs={6}
                varient="outlined"
                fullWidth
                required
                className={classes.input}
                value={password}
              />
              <FormGroup row className={classes.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheck}
                      name="checkedB"
                      color="primary"
                      value = {checked}
                    />
                  }
                  label="Login with sample account"
                />
              </FormGroup>
            </Grid>

            <Button
              type="submit"
              fullWidth
              varient="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
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
                  style={{textTransform:"none"}}
                >
                  Forgot Password ?
                </Button>
              </Grid>
              
              <Grid item>
              <Link to="/signup"  style={{textDecoration:"none"}}>
                <Button
                  fullWidth
                  varient="contained"
                  color="secondary"
                  style={{textTransform:"none"}}
                >
                  Don't have an account? Create One
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

export default Login;
