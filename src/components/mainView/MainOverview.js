import React from "react";
import Chart from "./Chart";
import StudentSmall from "./student/StudentSmall";
import Table from "./Table";

function MainOverview({ chartData, chartFilters, students, loading }) {
  return (
    <>
      {loading ? (
        <h2 className="main__loading">Loading...</h2>
      ) : (
        <>
          <Chart chartData={chartData} chartFilters={chartFilters} />
          <StudentSmall students={students} />
          {chartFilters.table ? <Table chartData={chartData} /> : null}
        </>
      )}
    </>
  );
}

export default MainOverview;
