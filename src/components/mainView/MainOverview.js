import React from "react";
import Chart from "./Chart";
import StudentSmall from "../student/StudentSmall";

function MainOverview({ average, chartFilters, students }) {
  return (
    <section className="mainContainer">
      <Chart average={average} chartFilters={chartFilters} />
      <StudentSmall students={students} />
    </section>
  );
}

export default MainOverview;
