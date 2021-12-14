import React from "react";

function TypeOfGraph({ chartFilters, handleChangeChartCheckboxes }) {
  return (
    <div className="chartList__typeGraph  chartList__wrapper">
      <h3 className="nav__header--sub chartList__header chartList__typeGraph--header">
        Graph type
      </h3>
      <div className="chartList__optionWrapper">
        <label htmlFor="lineGraph" className="chartList__typeGraph--text">
          <input
            type="radio"
            id="lineGraph"
            className="chartList__typeGraph--option"
            name="graphType"
            value="lineGraph"
            checked={chartFilters.lineGraph}
            onChange={() => {}}
            onClick={(event) => {
              handleChangeChartCheckboxes(event);
            }}
          />
          Line
        </label>

        <label htmlFor="barChart" className="chartList__typeGraph--text">
          <input
            type="radio"
            id="barChart"
            className="chartList__typeGraph--option"
            name="graphType"
            value="barChart"
            checked={chartFilters.barChart}
            onChange={() => {}}
            onClick={(event) => {
              handleChangeChartCheckboxes(event);
            }}
          />
          Bars
        </label>
      </div>
    </div>
  );
}

export default TypeOfGraph;
