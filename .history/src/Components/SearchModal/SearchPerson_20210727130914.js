import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./SearchPerson.css";

function SearchPerson({ name, email }) {
  return (
    <div className="search__person">
      <div className="sp__details">
        <div className="sp__details__avatar">
          <Avatar alt={name} src="/static/images/avatar/1.jpg" />
        </div>
        <div className="sp__details__cred">
          <h3>{name}</h3>
          <p>{email}</p>
        </div>
      </div>

      <div className="sp__add">
        <button type="submit">Add</button>
      </div>
    </div>
  );
}

export default SearchPerson;
