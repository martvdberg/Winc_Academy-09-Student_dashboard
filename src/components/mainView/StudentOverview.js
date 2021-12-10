import React from "react";
import { Link } from "react-router-dom";

import StudentBig from "../student/StudentBig";
import Chart from "./Chart";

function StudentOverview({
  student,
  chartData,
  chartFilters,
  handleAllSelectedStudents,
}) {
  return (
    <section className="studentContainer">
      <Chart average={chartData} chartFilters={chartFilters} />
      <StudentBig
        student={student}
        handleAllSelectedStudents={handleAllSelectedStudents}
      />
      <Link to={"/"} className="resetBtn">
        <span
          title="reset"
          onClick={(event) => {
            handleAllSelectedStudents(event);
          }}
        >
          view all students
        </span>
      </Link>
    </section>
  );
}

export default StudentOverview;
