import React from "react";
import Chart from "./Chart";
import StudentSmall from "../student/StudentSmall";

function MainOverview({ average, chartFilters, students, loading }) {
  return (
    <>
      {loading ? (
        <h1 className="main__loading">Loading...</h1>
      ) : (
        <>
          <Chart average={average} chartFilters={chartFilters} />
          <StudentSmall students={students} />
        </>
      )}
    </>
  );
}

export default MainOverview;
