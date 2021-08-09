import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./InvitePerson.css";

function InvitePerson({ name, email }) {
  const [isAdded, setIsAdded] = React.useState(true);

  const handleAdd = () => {
    setIsAdded((prev) => !prev);
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
          type="submit"
          onClick={handleAdd}
          className={isAdded ? "addButton" : "addedButton"}
        >
          {isAdded ? "Add" : "Added"}
        </button>
      </div>
    </div>
  );
}

export default InvitePerson;
