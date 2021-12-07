import React from "react";
import Chart from "../components/Chart";

function MainOverview({ avarege }) {
  console.log(avarege);
  return (
    <section className="MainOverview">
      <h2>Main view</h2>
      <Chart avarege={avarege} />
    </section>
  );
}

export default MainOverview;
