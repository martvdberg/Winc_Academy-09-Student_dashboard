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
        className="studentList__name studentList__link"
      >
        {`${student.details.firstName}`}
      </Link>
    );
  });

  return (
    <div className="nav__single" onMouseLeave={handleMouseOutHideItems}>
      <h2
        className="nav__header nav__single--header"
        id="showStudentLinks"
        onMouseEnter={(event) => handleMouseOverShowItems(event)}
      >
        Single student
      </h2>
      <div
        className={`nav__list nav__single--list studentList ${
          showItems.StudentLinks ? "" : "hidden"
        }`}
        id="studentLinks"
        onClick={(event) => handleMouseOverShowItems(event)}
      >
        {studentFilterLink}
      </div>
    </div>
  );
}

export default SelectSingleStudent;
