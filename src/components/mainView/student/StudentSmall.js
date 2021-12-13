import React from "react";
import { Link } from "react-router-dom";
import { getSelectedStudents, generateId } from "../../../util";

function StudentSmall({ students }) {
  const selectedStudents = getSelectedStudents(students);
  const studentElements = selectedStudents.map((student) => {
    return (
      <Link
        to={`/${student.details.firstName}`}
        className="studentSmall__link"
        key={generateId()}
      >
        <div className="main__selectedStudents--student studentSmall">
          <img
            src={student.details.photo}
            alt="profilepicture"
            className="studentSmall__img"
            height={"75px"}
          />

          <span className="studentSmall__name">
            {" "}
            {`${student.details.firstName} ${student.details.lastName}`}{" "}
          </span>
        </div>
      </Link>
    );
  });

  return (
    <div className="main__selectedStudents ">
      {selectedStudents.length > 0 ? (
        <h2 className="main__selectedStudents--header">Selected students</h2>
      ) : (
        ""
      )}
      {studentElements}
    </div>
  );
}

export default StudentSmall;
