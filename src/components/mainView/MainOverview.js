import React from "react";
import Chart from "./Chart";

function MainOverview({ average, chartFilters }) {
  return (
    <section className="mainContainer">
      <h2>Main overview</h2>
      <Chart average={average} chartFilters={chartFilters} />
    </section>
  );
}

export default MainOverview;
