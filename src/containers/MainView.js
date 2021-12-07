import React from "react";
import Chart from "../components/Chart";

function MainView({ avarege }) {
  console.log(avarege);
  return (
    <section className="mainView">
      <h2>Main view</h2>
      <Chart avarege={avarege} />
    </section>
  );
}

export default MainView;
