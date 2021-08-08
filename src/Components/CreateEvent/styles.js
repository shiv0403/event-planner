import { makeStyles, createTheme } from "@material-ui/core/styles";

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

export default makeStyles(() => ({
  body: {
    textAlign: "center",
    width: "50%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    width: "100%",
    margin: "40px 10px 0px 10px",
  },
  root: {
    // display: "flex",
    margin: "auto",
  },
  categories: {
    margin: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      // width: "100%",
      margin: "10px 8px",
    },
  },
  avatar: {
    width: "20%",
    height: "90px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "20%",
      height: "60px",
    },
  },
  container: {
    paddingTop: "100px",
  },
  input: {
    marginTop: "20px",
  },
  eventDetails__typeHeading: {
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
    },
  },
  checkbox: {
    // marginTop: "20px",
    marginBottom: "20px",
  },
  check: {},
  button: {
    marginTop: "50px",
    border: "1px solid blue",
    marginBottom: "20px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    border: "1px solid #244ed8",
    borderRadius: "10px",
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    border: "1px solid #244ed8",
    borderRadius: "10px",
  },
}));
