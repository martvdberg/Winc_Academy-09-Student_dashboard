import React from "react";
import { Link } from "react-router-dom";
import { generateId } from "../../util";

function SelectMultipleStudents({
  students,
  handleMouseOverShowItems,
  handleMouseOutHideItems,
  handleChangeStudentCheckbox,
  showItems,
  handleSelectAllStudents,
}) {
  const StudentFilterCheckbox = students.map((student) => {
    return (
      <label
        htmlFor={student.details.id}
        className="menu__option"
        key={generateId()}
      >
        <input
          type="checkbox"
          id={student.details.id}
          className="menu__option--checkbox"
          value={student.details.id}
          checked={student.details.checked}
          onChange={(event) => handleChangeStudentCheckbox(event)}
        />
        {`${student.details.firstName}`}
      </label>
    );
  });

  return (
    <div className="nav__menu" onMouseLeave={handleMouseOutHideItems}>
      <h2
        className="nav__header"
        id="showStudentCheckboxes"
        onMouseEnter={(event) => handleMouseOverShowItems(event)}
      >
        Multiple students
      </h2>
      <div
        className={`menu ${showItems.StudentCheckboxes ? "" : "hidden"}`}
        id="studentCheckboxes"
      >
        {StudentFilterCheckbox}
        <div className="menu__btnWrapper">
          <span
            className="menu__btn menu__btn--all"
            title="selectAll"
            onClick={(event) => {
              handleSelectAllStudents(event);
            }}
          >
            select all
          </span>
          <span
            className="menu__btn menu__btn--reset"
            title="reset"
            onClick={(event) => {
              handleSelectAllStudents(event);
            }}
          >
            Reset
          </span>
          {/* link to home to get out of the student page if your on one */}
          <Link to={"/"} className="menu__btn menu__btn--apply">
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectMultipleStudents;
