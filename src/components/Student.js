import React from "react";
import { Link } from "react-router-dom";
import { generateId } from "../util";

function Student({ firstName, lastName }) {
  return <Link to={`/${firstName}`} key={generateId()}>{`${firstName}`}</Link>;
}

export default Student;
