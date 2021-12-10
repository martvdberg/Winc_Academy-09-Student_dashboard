import React from "react";

function StudentBig({ student }) {
  return (
    <div>
      <div className="imgWrapper">
        <img src={student.details.photo} alt="profilepicture" />
      </div>
      <div className="detailsWrapper">
        <span>{`${student.details.firstName} ${student.details.lastName}`}</span>
        <span>{`${student.details.age}`}</span>
        <span>{`${student.details.email}`}</span>
      </div>
    </div>
  );
}

export default StudentBig;
