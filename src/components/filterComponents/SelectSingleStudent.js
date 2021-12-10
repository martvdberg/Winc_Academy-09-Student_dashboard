import React from "react";
import { Link } from "react-router-dom";

function SelectSingleStudent({ students, handleClickShowItems, showItems }) {
  const studentFilterLink = students.map((student) => {
    return (
      <Link to={`/${student.details.firstName}`}>
        <span>{`${student.details.firstName}`}</span>
      </Link>
    );
  });

  return (
    <div className="filter__singleStudent">
      <span
        className="filter--btn"
        id="showStudentLinks"
        onClick={(event) => handleClickShowItems(event)}
      >
        Select single student
      </span>
      <div
        className={`studentFilter__links ${
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
