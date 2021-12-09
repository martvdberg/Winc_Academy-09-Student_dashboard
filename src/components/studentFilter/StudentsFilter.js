import React from "react";
import { Link } from "react-router-dom";
import StudentFilterItem from "./StudentFilterItem";
import { generateId } from "../../util";

function StudentFilter({
  students,
  handleClickShowItems,
  handleSubmit,
  showItems,
  handleChangeStudentCheckbox,
}) {
  const studentFilterCheckbox = [];
  const StudentFilterLink = students.map((student) => {
    const studentItem = (
      <StudentFilterItem
        firstName={student.details.firstName}
        lastName={student.details.lastName}
        // value={student.details.checked}
        key={generateId()}
        handleClickShowItems={handleClickShowItems}
      />
    );
    studentFilterCheckbox.push(
      <label htmlFor={student.details.id}>
        <input
          type="checkbox"
          id={student.details.id}
          value={student.details.id}
          checked={student.details.checked}
          onChange={(event) => handleChangeStudentCheckbox(event)}
        />
        {studentItem}
      </label>
    );
    return <Link to={`/${student.details.firstName}`}>{studentItem}</Link>;
  });

  return (
    <section className="StudentFilter">
      <button
        id="showStudentLinks"
        onClick={(event) => handleClickShowItems(event)}
      >
        Select a single student
      </button>
      <button
        id="showStudentCheckboxes"
        onClick={(event) => handleClickShowItems(event)}
      >
        Filter students
      </button>
      <div
        className={`studentFilter__links ${
          showItems.StudentLinks ? null : "hidden"
        }`}
        id="studentLinks"
        onClick={(event) => handleClickShowItems(event)}
      >
        {StudentFilterLink}
      </div>

      <div
        className={`studentFilter__checkboxes ${
          showItems.StudentCheckboxes ? null : "hidden"
        }`}
        id="studentCheckboxes"
      >
        {" "}
        <form
          className="studentFilter__checkboxes--form"
          onSubmit={(event) => handleSubmit(event, students)}
        >
          {studentFilterCheckbox}
          <button onClick={(event) => handleClickShowItems(event)}>
            Filter students
          </button>
        </form>
      </div>
    </section>
  );
}

export default StudentFilter;
