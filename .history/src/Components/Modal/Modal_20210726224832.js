import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Search
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="search__header">
              <input type="text" />
              <button type="submit"> Search</button>
            </div>
            <div className="search__body">
              <div className="search__person">
                <h3>Shivansh Gupta</h3>
                <p>shivanshgupta@gmail.com</p>
              </div>
              <div className="search__person">
                <h3>Himalaya Gupta</h3>
                <p>himalayagupta@gmail.com</p>
              </div>
              <div className="search__person">
                <h3>Priyansh Singh</h3>
                <p>priyanshsingh@gmail.com</p>
              </div>
            </div>
            <div className="search__footer">
              <p>https://invitelinke.com</p>
              <button type="submit">Invite people</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
