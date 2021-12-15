import React from "react";
import { Link } from "react-router-dom";
import { generateId } from "../../util";

function SelectSingleStudent({
  students,
  handleMouseOverShowItems,
  handleMouseOutHideItems,
  showItems,
}) {
  const studentFilterLink = students.map((student) => {
    return (
      <Link
        to={`/${student.details.firstName}`}
        key={generateId()}
        className="menu__option"
      >
        {`${student.details.firstName}`}
      </Link>
    );
  });

  return (
    <div className="nav__menu" onMouseLeave={handleMouseOutHideItems}>
      <h2
        className="nav__header"
        id="showStudentLinks"
        onMouseEnter={(event) => handleMouseOverShowItems(event)}
      >
        Single student
      </h2>
      <div
        className={`menu  ${showItems.StudentLinks ? "" : "hidden"}`}
        id="studentLinks"
        onClick={(event) => handleMouseOverShowItems(event)}
      >
        {studentFilterLink}
      </div>
    </div>
  );
}

export default SelectSingleStudent;
