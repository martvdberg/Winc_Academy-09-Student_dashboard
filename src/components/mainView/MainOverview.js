import React from "react";
import Chart from "./Chart";

function MainOverview({ average }) {
  return (
    <section className="mainContainer">
      <h2>Main overview</h2>
      <Chart average={average} />
    </section>
  );
}

export default MainOverview;