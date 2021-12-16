import React from "react";
import { Link } from "react-router-dom";

import StudentBig from "./student/StudentBig";
import Chart from "./Chart";
import Table from "./Table";

function StudentOverview({
  student,
  chartData,
  filterSettings,
  handleSelectAllStudents,
}) {
  return (
    <>
      <Chart chartData={chartData} filterSettings={filterSettings} />
      <StudentBig
        student={student}
        handleSelectAllStudents={handleSelectAllStudents}
      />
      {filterSettings.showTable ? <Table chartData={chartData} /> : null}

      <Link to={"/"} className="main__btn main__btn--back">
        Back to overview
      </Link>
    </>
  );
}

export default StudentOverview;
