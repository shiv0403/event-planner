import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";

import "./InvitePerson.css";
import axios from "axios";

function InvitePerson({ name, email }) {
  const [isInvited, setIsInvited] = React.useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleAdd = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    setIsBtnDisabled(true);
    try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      config
    );
    if(response.status === 201){
      setIsInvited(true);
    }else{
      alert('Network Error')
    }
  }catch(e){
    alert(e.message)
  }
    setIsBtnDisabled(false);
  };



  return (
    <div className="search__person">
      <div className="sp__details">
        <div className="sp__details__avatar">
          <Avatar
            alt={name}
            src="/static/images/avatar/1.jpg"
            className="invite__avatar"
          />
        </div>
        <div className="sp__details__cred">
          <h3>{name}</h3>
          <p>{email}</p>
        </div>
      </div>

      <div className="sp__add">
        <button
          style={isBtnDisabled ? {pointerEvents:"none",borderColor:"gray",color:"gray"} : {}}
          type="submit"
          onClick={handleAdd}
          className={!isInvited ? "addButton" : "addedButton"}
        >
          {isInvited ? "Invited" : isBtnDisabled ? "Inviting..." : "Invite"}
        </button>
      </div>
    </div>
  );
}

export default InvitePerson;
