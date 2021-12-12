import React from "react";
import { Link } from "react-router-dom";
import { generateId } from "../../util";

function SelectMultipleStudents({
  students,
  handleClickShowItems,
  handleChangeStudentCheckbox,
  showItems,
  handleSubmitSelectedStudents,
  handleAllSelectedStudents,
}) {
  const StudentFilterCheckbox = students.map((student) => {
    return (
      <label
        htmlFor={student.details.id}
        key={generateId()}
        className="studentList__name"
      >
        <input
          type="checkbox"
          id={student.details.id}
          className="studentList__name--checkbox"
          value={student.details.id}
          checked={student.details.checked}
          onChange={(event) => handleChangeStudentCheckbox(event)}
        />
        {`${student.details.firstName}`}
      </label>
    );
  });

  return (
    <div className="nav__multiple">
      <h2
        className="nav__header nav__multiple--header"
        id="showStudentCheckboxes"
        onClick={(event) => handleClickShowItems(event)}
      >
        Multiple students
      </h2>
      <div
        className={`nav__list nav__multiple--list studentList ${
          showItems.StudentCheckboxes ? null : "hidden"
        }`}
        id="studentCheckboxes"
      >
        <span
          className="nav__btn nav__btn--all studentList__btn"
          title="selectAll"
          onClick={(event) => {
            handleAllSelectedStudents(event);
          }}
        >
          select all
        </span>
        {StudentFilterCheckbox}
        <div className="nav__btnWrapper">
          <span
            className="nav__btn nav__btn--reset studentList__btn"
            title="reset"
            onClick={(event) => {
              handleAllSelectedStudents(event);
            }}
          >
            Reset
          </span>
          <span
            className="nav__btn nav__btn--apply studentList__btn"
            onClick={(event) => {
              handleClickShowItems(event);
              handleSubmitSelectedStudents();
            }}
          >
            <Link to={"/"} className="nav__btn--link">
              Apply
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SelectMultipleStudents;