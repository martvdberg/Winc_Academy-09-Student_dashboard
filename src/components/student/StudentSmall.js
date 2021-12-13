import React from "react";
import { Link } from "react-router-dom";
import { getSelectedStudents } from "../../util";

function StudentSmall({ students }) {
  const selectedStudents = getSelectedStudents(students);
  const studentElements = selectedStudents.map((student) => {
    return (
      <Link to={`/${student.details.firstName}`} className="studentSmall__link">
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

  return <div className="main__selectedStudents">{studentElements}</div>;
}

export default StudentSmall;
