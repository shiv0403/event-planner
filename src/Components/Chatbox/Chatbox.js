// import React, { useEffect, useState } from "react";

// import { Avatar, Button, IconButton, Modal } from "@material-ui/core";
// // import SearchIcon from "@material-ui/icons/Search";
// import AttachFileIcon from "@material-ui/icons/AttachFile";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
// import SendIcon from "@material-ui/icons/Send";
// import { makeStyles } from "@material-ui/core/styles";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";

// import "./Chatbox.css";
// import Message from "./Message";
// import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     borderRadius: "10px",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     display: "flex",
//     flexDirection: "column",
//     textAlign: "left",
//   },
//   button: {
//     border: "1px solid #244ed8",
//     fontSize: "0.9rem",
//     marginTop: "20px",
//   },
//   heading: {
//     marginBottom: "20px",
//   },
// }));

// function Chatbox() {
//   const classes = useStyles();

//   const [input, setInput] = useState("");
//   const [isEmoji, setIsEmoji] = useState(false);
//   const [isFileSelected, setIsFileSelected] = useState(false);
//   const [fileSelected, setFileSelected] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setOpen((prev) => !prev);
//     if (isFileSelected) {
//       setIsFileSelected((prev) => !prev);
//     }
//   };

//   const handleMessage = (e) => {
//     console.log(e.target.value);
//     setInput(() => e.target.value);
//   };

//   const handleEmoji = (e, o) => {
//     if (o) {
//       setInput((input) => input + o.emoji);
//     }
//   };

//   const handleFile = (e) => {
//     setIsFileSelected((prev) => !prev);
//     setFileSelected(() => e.target.files[0]);
//     console.log(isFileSelected, fileSelected);
//   };

//   return (
//     <div className="chat">
//       <div className="chat__header">
//         <Avatar />
//         <div className="chat__headerInfo">
//           <h3>Celebrating Priyansh's Birthday</h3>
//           {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
//         </div>
//         <div className="chat__headerRight">
//           {/* <IconButton>
//             <SearchIcon />
//           </IconButton> */}

//           <IconButton>
//             <MoreVertIcon />
//           </IconButton>
//         </div>
//       </div>

//       <div className="chat__body">
//         <Message send={"yes"} />
//         <Message send={"no"} />
//         <Message send={"yes"} />
//         <Message send={"no"} />
//         <Message send={"yes"} />
//         <Message send={"yes"} />
//         <Message send={"no"} />
//         <Message send={"no"} />
//         <Message send={"yes"} />
//         <Message send={"no"} />
//         <Message send={"yes"} />
//         <Message send={"yes"} />
//         <Message send={"no"} />
//         <Message send={"no"} />
//       </div>

//       {isEmoji && (
//         <div className="chat__emoji">
//           <Picker onEmojiClick={handleEmoji} skinTone={SKIN_TONE_MEDIUM_DARK} />
//         </div>
//       )}

//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//             <h3 className={classes.heading}>Select the File</h3>
//             <input type="File" name="file" onChange={handleFile} />
//             {isFileSelected && (
//               <Button color="primary" className={classes.button}>
//                 Send
//               </Button>
//             )}
//           </div>
//         </Fade>
//       </Modal>

//       <div className="chat__footer">
//         <IconButton>
//           <InsertEmoticonIcon
//             onClick={() => setIsEmoji((isEmoji) => !isEmoji)}
//           />
//         </IconButton>

//         <IconButton>
//           <AttachFileIcon onClick={handleOpen} />
//         </IconButton>
//         <form>
//           <input
//             value={input}
//             onChange={handleMessage}
//             type="text"
//             placeholder="Type a message"
//           />
//           <IconButton>
//             <SendIcon />
//           </IconButton>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Chatbox;
