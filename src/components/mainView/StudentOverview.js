import React from "react";
import { Link } from "react-router-dom";

import StudentBig from "../student/StudentBig";
import Chart from "./Chart";
import Table from "./Table";

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
      {chartFilters.table ? <Table average={chartData} /> : null}

      <Link to={"/"} className="main__btn main__btn--back">
        Back to overview
      </Link>
    </>
  );
}

export default StudentOverview;
