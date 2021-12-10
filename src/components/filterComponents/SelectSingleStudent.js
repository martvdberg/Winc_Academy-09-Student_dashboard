import React from "react";
import { Link } from "react-router-dom";
import { generateId } from "../../util";

function SelectSingleStudent({ students, handleClickShowItems, showItems }) {
  const studentFilterLink = students.map((student) => {
    return (
      <Link to={`/${student.details.firstName}`} key={generateId()}>
        <span>{`${student.details.firstName}`}</span>
      </Link>
    );
  });

  return (
    <div className="filter__singleStudent">
      <span
        className="filter__btn"
        id="showStudentLinks"
        onClick={(event) => handleClickShowItems(event)}
      >
        Select single student
      </span>
      <div
        className={`filter__singleStudent--links ${
          showItems.StudentLinks ? null : "hidden"
        }`}
        id="studentLinks"
        onClick={(event) => handleClickShowItems(event)}
      >
        {studentFilterLink}
      </div>
    </div>
  );
}

export default SelectSingleStudent;
