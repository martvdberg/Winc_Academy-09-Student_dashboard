import React from "react";

function StudentFilterItem({ firstName, lastName, changeFilterOn }) {
  return <span onClick={changeFilterOn}>{`${firstName}`}</span>;
}

export default StudentFilterItem;
