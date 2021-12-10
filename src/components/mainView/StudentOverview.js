import React from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";

function StudentOverview({
  student,
  chartData,
  chartFilters,
  handleAllSelectedStudents,
}) {
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
        <Link to={"/"}>
          <span
            className="resetBtn"
            title="reset"
            onClick={(event) => {
              handleAllSelectedStudents(event);
            }}
          >
            view all students
          </span>
        </Link>
      </section>

      <Chart average={chartData} chartFilters={chartFilters} />
    </section>
  );
}

export default StudentOverview;
