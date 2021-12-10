import React from "react";

function SelectChartFilters({
  handleClickShowItems,
  showItems,
  handleChangeChartCheckboxes,
  chartFilters,
}) {
  return (
    <div className="filter__chart">
      <span
        className="filter--btn"
        id="showChartFilters"
        onClick={(event) => handleClickShowItems(event)}
      >
        Select chart filters
      </span>
      <div
        className={`chartFilter__checkboxes ${
          showItems.ChartFilters ? null : "hidden"
        }`}
        id="chartFilters"
      >
        <label htmlFor="filterFun">
          <input
            type="checkbox"
            id="filterFun"
            value="funChart"
            checked={chartFilters.funChart}
            onChange={(event) => {
              handleChangeChartCheckboxes(event);
            }}
          />
          Fun
        </label>
        <label htmlFor="filterDiff">
          <input
            type="checkbox"
            id="filterDiff"
            value="diffChart"
            checked={chartFilters.diffChart}
            onChange={(event) => {
              handleChangeChartCheckboxes(event);
            }}
          />
          Difficult
        </label>
        <p>Graph type</p>
        <label htmlFor="lineGraph">
          <input
            type="radio"
            id="lineGraph"
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
        <label htmlFor="barChart">
          <input
            type="radio"
            id="barChart"
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

export default SelectChartFilters;
