import React, { useEffect } from "react";
import Chart from "./Chart";

function StudentOverview({ student, chartData }) {
  return (
    <section className="studentContainer">
      <h2>Student overview</h2>
      <section className="studentContainer__student">
        <img
          src={student.details.photo}
          className="studentContainer__student--photo"
          alt="==student=="
        />
        <span className="studentContainer__student--name">
          Name: {`${student.details.firstName} ${student.details.lastName}`}
        </span>
        <span className="studentContainer__student--age">
          Age: {student.details.age}
        </span>
        <span className="studentContainer__student--email">
          email: {student.details.email}
        </span>
      </section>

      <Chart average={chartData} />
    </section>
  );
}

export default StudentOverview;
