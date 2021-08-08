import { Avatar } from "@material-ui/core";
import React, { useState } from "react";

import "./AddPerson.css";

function AddPerson({ name, email }) {
  const [isAdded, setIsAdded] = useState(true);

  const handleAdd = () => {
    setIsAdded((prev) => !prev);
  };

  return (
    <div className="add__person">
      <div className="ap__details">
        <div className="ap__details__avatar">
          <Avatar
            alt={name}
            src="/static/images/avatar/1.jpg"
            className="invite__avatar"
          />
        </div>
        <div className="ap__details__cred">
          <h3>{name}</h3>
          <p>{email}</p>
        </div>
      </div>

      <div className="ap__add">
        <button
          type="submit"
          onClick={handleAdd}
          className={isAdded ? "addButton" : "addedButton"}
        >
          {isAdded ? "Invite" : "Invited"}
        </button>
      </div>
    </div>
  );
}

export default AddPerson;
