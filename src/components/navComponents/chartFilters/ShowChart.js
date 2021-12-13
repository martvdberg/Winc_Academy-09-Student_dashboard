import React from "react";

function ShowChart({ chartFilters, handleChangeChartCheckboxes }) {
  return (
    <div className="chartList__showGraph chartList__wrapper">
      <h3 className="nav__header--sub  chartList__header chartList__showGraph--header">
        Choose data
      </h3>
      <div className="chartList__optionWrapper">
        <input
          type="checkbox"
          id="filterFun"
          className="chartList__showGraph--checkbox"
          value="funChart"
          checked={chartFilters.funChart}
          onChange={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        <label htmlFor="filterFun" className="chartList__showGraph--fun">
          Fun
        </label>
        <input
          type="checkbox"
          id="filterDiff"
          className="chartList__showGraph--checkbox"
          value="diffChart"
          checked={chartFilters.diffChart}
          onChange={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        <label htmlFor="filterDiff" className="chartList__showGraph--diff">
          Difficult
        </label>
      </div>
    </div>
  );
}

export default ShowChart;
