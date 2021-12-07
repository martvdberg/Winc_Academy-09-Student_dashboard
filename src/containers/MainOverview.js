import React from "react";
import Chart from "../components/Chart";

function MainOverview({ average }) {
  console.log(average);
  return (
    <section className="MainOverview">
      <h2>Main overview</h2>
      <Chart average={average} />
    </section>
  );
}

export default MainOverview;
