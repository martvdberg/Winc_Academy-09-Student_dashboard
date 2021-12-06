// element to create each seperate student
import React from "react";

function Student({ firstName, lastName }) {
  return (
    <label htmlFor={`${firstName}Selector`}>
      <input type="checkbox" id={`${firstName}Selector`} />
      {firstName} {lastName}
    </label>
  );
}

export default Student;
