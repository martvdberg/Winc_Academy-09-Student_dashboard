import React from "react";
import { Link } from "react-router-dom";
import { getSelectedStudents } from "../../util";

function StudentSmall({ students }) {
  const selectedStudents = getSelectedStudents(students);
  const studentElements = selectedStudents.map((student) => {
    return (
      <div>
        <span>Image</span>

        <Link to={`/${student.details.firstName}`}>
          {`${student.details.firstName} ${student.details.lastName}`}
        </Link>
      </div>
    );
  });

  return <div>{studentElements}</div>;
}

export default StudentSmall;
