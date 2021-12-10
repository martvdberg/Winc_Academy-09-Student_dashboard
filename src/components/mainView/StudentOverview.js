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
    <>
      <Chart average={chartData} chartFilters={chartFilters} />
      <StudentBig
        student={student}
        handleAllSelectedStudents={handleAllSelectedStudents}
      />
      <Link to={"/"} className="backBtn">
        <span title="back">Back to overview</span>
      </Link>
    </>
  );
}

export default StudentOverview;
