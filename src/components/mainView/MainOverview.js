import React from "react";
import Chart from "./Chart";
import StudentSmall from "../student/StudentSmall";

function MainOverview({ average, chartFilters, students, loading }) {
  return (
    <>
      {loading ? (
        <h2 className="main__loading">Loading...</h2>
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
