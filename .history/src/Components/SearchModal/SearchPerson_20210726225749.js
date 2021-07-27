import React from "react";

function SearchPerson({ name, email }) {
  return (
    <div>
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
