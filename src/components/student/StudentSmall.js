import React from "react";
import { Link } from "react-router-dom";
import { getSelectedStudents } from "../../util";

function StudentSmall({ students }) {
  const selectedStudents = getSelectedStudents(students);
  const studentElements = selectedStudents.map((student) => {
    return (
      <div className="main__selectedStudents--singleStudent">
        <Link to={`/${student.details.firstName}`}>
          <img
            src={student.details.photo}
            alt="profilepicture"
            height={"75px"}
          />
          {`${student.details.firstName} ${student.details.lastName}`}
        </Link>
      </div>
    );
  });

  return <div className="main__selectedStudents">{studentElements}</div>;
}

export default StudentSmall;
