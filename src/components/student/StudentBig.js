import React from "react";

function StudentBig({ student }) {
  return (
    <div className="student">
      <div className="student__img">
        <img src={student.details.photo} alt="profilepicture" />
      </div>
      <div className="student__details">
        <span className="student__details--name">{`${student.details.firstName} ${student.details.lastName}`}</span>
        <span className="student__details--age">{`Age: ${student.details.age}`}</span>
        <span className="student__details--email">{`${student.details.email}`}</span>
      </div>
    </div>
  );
}

export default StudentBig;
