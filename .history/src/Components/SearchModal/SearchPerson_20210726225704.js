import React from "react";

function SearchPerson({ name, email }) {
  return (
    <div>
      <h3>Shivansh Gupta</h3>
      <p>shivanshgupta@gmail.com</p>
      <div className="search__person__add">
        <button type="submit">Add +</button>
      </div>
    </div>
  );
}

export default SearchPerson;
