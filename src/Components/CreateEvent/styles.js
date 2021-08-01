import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  },
  categories: {
    margin: theme.spacing(3),
  },
  avatar: {
    width: "30%",
    height: "110px",
    margin: "auto",
  },
  container: {
    paddingTop: "100px",
  },
  input: {
    marginTop: "20px",
  },
  checkbox: {
    // marginTop: "20px",
    marginBottom: "20px",
  },
  button: {
    marginTop: "50px",
    border: "1px solid blue",
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
