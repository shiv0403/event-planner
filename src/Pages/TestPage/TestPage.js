import React, { useState } from "react";
import EventInfo from "../../Components/EventInfo/EventInfo";
import "./TestPage.css";
import "./newChatbox.css";

// yeh baad me kiya hai
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton, Button, Modal } from "@material-ui/core";
import Message from "../../Components/Chatbox/Message";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import LogFile from "../../Components/LogFile/LogFile";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  button: {
    border: "1px solid #244ed8",
    fontSize: "0.9rem",
    marginTop: "20px",
  },
  heading: {
    marginBottom: "20px",
  },
}));

function TestPage() {
  const classes = useStyles();
  const [showChatBox, setShowChatBox] = useState(false);
  const [input, setInput] = useState("");
  const [isEmoji, setIsEmoji] = useState(false);
  const [open, setOpen] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [fileSelected, setFileSelected] = useState(null);
  const [showEventInfo, setShowEventInfo] = useState(true);
  const [showLogFile, setShowLogFile] = useState(false);
  const [showTasks, setShowTasks] = useState(false);

  const handleInfoClick = () => {
    setShowEventInfo(true);
    setShowLogFile(false);
    setShowTasks(false);
  };
  const handleLogClick = () => {
    setShowLogFile(true);
    setShowEventInfo(false);
    setShowTasks(false);
  };
  const handleTaskClick = () => {
    setShowTasks(true);
    setShowEventInfo(false);
    setShowLogFile(false);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen((prev) => !prev);
    if (isFileSelected) {
      setIsFileSelected((prev) => !prev);
    }
  };

  const handleMessage = (e) => {
    console.log(e.target.value);
    setInput(() => e.target.value);
  };

  const handleEmoji = (e, o) => {
    if (o) {
      setInput((input) => input + o.emoji);
    }
  };

  const handleFile = (e) => {
    setIsFileSelected((prev) => !prev);
    setFileSelected(() => e.target.files[0]);
    console.log(isFileSelected, fileSelected);
  };

  return (
    <div className="testPageContainer">
      <div className="testLeftSide">
        <div className="testInfoContainer">
          <div className="testMenuBar topHeader">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <Link
                to="/"
                style={{
                  marginLeft: "10px",
                  // marginRight: "10px",
                  color: "black",
                }}
              >
                <i className="fa fa-arrow-left fa-lg"></i> */}
              {/* </Link> */}
              {showEventInfo ? (
                <h2>Event Info</h2>
              ) : showLogFile ? (
                <h2 style={{ paddingLeft: "" }}>Transactions Log</h2>
              ) : (
                <h2>Tasks Assigned</h2>
              )}
            </div>
            <div className="iconsSet">
              <i
                className={
                  showEventInfo
                    ? "fa fa-info-circle active"
                    : "fa fa-info-circle"
                }
                title="View Event Info"
                onClick={handleInfoClick}
              ></i>
              <i
                className={showLogFile ? "fa fa-file active" : "fa fa-file"}
                title="View Log File"
                onClick={handleLogClick}
              ></i>
              <i
                className={showTasks ? "fa fa-tasks active" : "fa fa-tasks"}
                title="View Tasks"
                onClick={handleTaskClick}
              ></i>
            </div>
          </div>
          <div className="testInfo">
            {showEventInfo ? <EventInfo /> : <LogFile/>}
          </div>
        </div>
      </div>
      <div className={showChatBox ? "testRightSide show" : "testRightSide"}>
        <div className="chatBoxContainer">
          <div className="testPageHeader">
            <div className="chat__header">
              <Avatar />
              <div className="chat__headerInfo">
                <h3>Celebrating Priyansh's Birthday</h3>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p> */}
              </div>
              <div className="chat__headerRight">
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div
            className="testPageBody"
            style={{ backgroundImage: "url('chatBackground6.jpeg')" }}
          >
            <Message send={"yes"} />
            <Message send={"yes"} />
            <Message send={"no"} />
            <Message send={"yes"} />
            <Message send={"yes"} />
            <Message send={"no"} />
            <Message send={"yes"} />
            <Message send={"yes"} />
            <Message send={"yes"} />
            <Message send={"no"} />
            <Message send={"yes"} />
            <Message send={"yes"} />
            <Message send={"no"} />
            <Message send={"yes"} />
            <Message send={"no"} />
            <Message send={"yes"} />
          </div>
          {isEmoji && (
            <div className="chat__emoji">
              <Picker
                onEmojiClick={handleEmoji}
                skinTone={SKIN_TONE_MEDIUM_DARK}
              />
            </div>
          )}
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
                <h3 className={classes.heading}>Select the File</h3>
                <input type="File" name="file" onChange={handleFile} />
                {isFileSelected && (
                  <Button color="primary" className={classes.button}>
                    Send
                  </Button>
                )}
              </div>
            </Fade>
          </Modal>
          <div className="testPageFooter">
            <IconButton>
              <InsertEmoticonIcon
                onClick={() => setIsEmoji((isEmoji) => !isEmoji)}
              />
            </IconButton>
            <IconButton>
              <AttachFileIcon onClick={handleOpen} />
            </IconButton>
            <form>
              <input
                value={input}
                onChange={handleMessage}
                type="text"
                placeholder="Type a message"
              />
              <IconButton>
                <SendIcon />
              </IconButton>
            </form>
          </div>
        </div>
      </div>
      <div className="openChat" onClick={() => setShowChatBox(!showChatBox)}>
        <i
          className={showChatBox ? "fa fa-times" : "fa fa-comment"}
          style={{ color: "white", fontSize: "25px" }}
        ></i>
      </div>
    </div>
  );
}

export default TestPage;
