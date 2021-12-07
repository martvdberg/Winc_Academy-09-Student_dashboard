import React from "react";
import { Link } from "react-router-dom";

function StudentListItem({ firstName, lastName }) {
  return <Link to={`/${firstName}`}>{`${firstName}`}</Link>;
}

export default StudentListItem;
