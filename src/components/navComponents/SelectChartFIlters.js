import React from "react";

function SelectChartFilters({
  handleMouseOverShowItems,
  handleMouseOutHideItems,
  showItems,
  handleChangeChartCheckboxes,
  chartFilters,
}) {
  return (
    <div className="nav__chart" onMouseLeave={handleMouseOutHideItems}>
      <h2
        className="nav__header nav__chart--header"
        id="showChartFilters"
        onMouseEnter={(event) => handleMouseOverShowItems(event)}
      >
        Chart filter
      </h2>
      <div
        className={`nav__list nav__chart--list chartList ${
          showItems.ChartFilters ? null : "hidden"
        }`}
      >
        <div className="chartList__showGraph">
          <h3 className="chartList__header chartList__showGraph--header">
            Choose data
          </h3>
          <div className="chartList__wrapper">
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
            <label htmlFor="filterFun" className="chartList__showGraph--fun">
              Fun
            </label>
            <label htmlFor="filterDiff" className="chartList__showGraph--diff">
              Difficult
            </label>
          </div>
        </div>
        <div className="chartList__typeGraph">
          <h3 className="chartList__header chartList__typeGraph--header">
            Graph type
          </h3>
          <div className="chartList__wrapper">
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
            <label htmlFor="lineGraph" className="chartList__typeGraph--text">
              Line
            </label>
            <label htmlFor="barChart" className="chartList__typeGraph--text">
              Bars
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectChartFilters;
