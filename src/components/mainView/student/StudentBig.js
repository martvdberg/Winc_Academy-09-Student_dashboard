import React from "react";

function StudentBig({ student }) {
  return (
    <div className="main__student student">
      <img
        src={student.details.photo}
        alt="profilepicture"
        className="student__img"
      />

      <div className="student__details">
        <span className="student__details--name">{`${student.details.firstName} ${student.details.lastName}`}</span>
        <span className="student__details--age">Age:</span>
        <span className="student__details--age">{`${student.details.age}`}</span>
        <span className="student__details--phone">phone:</span>
        <span className="student__details--phone">{`${student.details.phone}`}</span>
        <span className="student__details--email">e-mail:</span>
        <span className="student__details--email">{`${student.details.email}`}</span>
      </div>
    </div>
  );
}

export default StudentBig;
