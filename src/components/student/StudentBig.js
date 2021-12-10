import React from "react";

function StudentBig({ student, handleAllSelectedStudents }) {
  return (
    <div>
      <div className="imgWrapper">
        <span>Image</span>
      </div>
      <div className="detailsWrapper">
        <span>{`${student.details.firstName} ${student.details.lastName}`}</span>
        <span>`${student.details.age}`</span>
        <span>{`${student.details.email}`}</span>
      </div>
    </div>
  );
}

export default StudentBig;
