import React from "react";
import { Link } from "react-router-dom";
function SelectMultipleStudents({
  students,
  handleClickShowItems,
  handleChangeStudentCheckbox,
  showItems,
  handleSubmitSelectedStudents,
  handleResetSelectedStudents,
}) {
  const StudentFilterCheckbox = students.map((student) => {
    return (
      <label htmlFor={student.details.id}>
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
        className={`studentFilter__checkboxes ${
          showItems.StudentCheckboxes ? null : "hidden"
        }`}
        id="studentCheckboxes"
      >
        {StudentFilterCheckbox}
        <span
          className="filter-btn filter-btn--reset"
          id="reset"
          onClick={() => {
            handleResetSelectedStudents();
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
