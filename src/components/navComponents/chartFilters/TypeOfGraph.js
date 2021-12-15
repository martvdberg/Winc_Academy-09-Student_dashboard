import React from "react";

function TypeOfGraph({ chartFilters, handleChangeChartCheckboxes }) {
  return (
    <div className="menu__subMenu">
      <h3 className="menu__subMenu--header">Graph type</h3>

      <label htmlFor="barChart" className="menu__option">
        <input
          type="radio"
          id="barChart"
          className="menu__option--checkbox"
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

      <label htmlFor="lineGraph" className="menu__option">
        <input
          type="radio"
          id="lineGraph"
          className="menu__option--checkbox"
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
    </div>
  );
}

export default TypeOfGraph;
