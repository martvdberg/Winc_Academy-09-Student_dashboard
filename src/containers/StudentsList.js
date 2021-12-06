import React from "react";
import Student from "../components/Student";
import { generateId } from "../util";

function StudentList({ students }) {
  const studentElement = students.map((student) => {
    return (
      <Student
        firstName={student.details.firstName}
        lastName={student.details.lastName}
        value={student.details.checked}
        key={generateId()}
      />
    );
  });

  return (
    <aside className="studentList">
      <h2>Students</h2>
      <form>{studentElement}</form>
    </aside>
  );
}

export default StudentList;
