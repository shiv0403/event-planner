import React from "react";
import "./SearchPerson.css";

function SearchPerson({ name, email }) {
  return (
    <div className="search__person">
      <div className="sp__details">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>

      <div className="sp__add">
        <button type="submit">Add +</button>
      </div>
    </div>
  );
}

export default SearchPerson;
