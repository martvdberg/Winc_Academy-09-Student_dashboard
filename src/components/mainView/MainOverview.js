import React from "react";
import Chart from "./Chart";
import StudentSmall from "../student/StudentSmall";
import Table from "./Table";

function MainOverview({ average, chartFilters, students, loading }) {
  return (
    <>
      {loading ? (
        <h2 className="main__loading">Loading...</h2>
      ) : (
        <>
          <Chart average={average} chartFilters={chartFilters} />
          <StudentSmall students={students} />
          {chartFilters.table ? <Table average={average} /> : null}
        </>
      )}
    </>
  );
}

export default MainOverview;
