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
      <label htmlFor={student.details.id} key={generateId()}>
        <input
          type="checkbox"
          id={student.details.id}
          value={student.details.id}
          checked={student.details.checked}
          onChange={(event) => handleChangeStudentCheckbox(event)}
        />
        {`${student.details.firstName}`}
      </label>
    );
  });

  return (
    <div className="filter__multipleStudents">
      <span
        className="filter--btn"
        id="showStudentCheckboxes"
        onClick={(event) => handleClickShowItems(event)}
      >
        Select multiple student
      </span>
      <div
        className={`filter__multipleStudents--checkboxes ${
          showItems.StudentCheckboxes ? null : "hidden"
        }`}
        id="studentCheckboxes"
      >
        <span
          className="filter__btn filter__btn--selectAll"
          title="selectAll"
          onClick={(event) => {
            handleAllSelectedStudents(event);
          }}
        >
          select all
        </span>
        {StudentFilterCheckbox}
        <span
          className="filter__btn filter__btn--reset"
          title="reset"
          onClick={(event) => {
            handleAllSelectedStudents(event);
          }}
        >
          Reset
        </span>
        <span
          className="filter-btn filter-btn--apply"
          onClick={(event) => {
            handleClickShowItems(event);
            handleSubmitSelectedStudents();
          }}
        >
          <Link to={"/"}>Apply</Link>
        </span>
      </div>
    </div>
  );
}

export default SelectMultipleStudents;
