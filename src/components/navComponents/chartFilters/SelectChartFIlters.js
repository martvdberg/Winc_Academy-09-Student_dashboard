import React from "react";
import ShowChart from "./ShowChart";
import ShowTable from "./ShowTable";
import SortTask from "./SortTask";
import TypeOfGraph from "./TypeOfGraph";

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
        <ShowChart
          chartFilters={chartFilters}
          handleChangeChartCheckboxes={handleChangeChartCheckboxes}
        />

        <TypeOfGraph
          chartFilters={chartFilters}
          handleChangeChartCheckboxes={handleChangeChartCheckboxes}
        />

        <SortTask
          handleChangeChartCheckboxes={handleChangeChartCheckboxes}
          chartFilters={chartFilters}
        />

        <ShowTable
          chartFilters={chartFilters}
          handleChangeChartCheckboxes={handleChangeChartCheckboxes}
        />
      </div>
    </div>
  );
}

export default SelectChartFilters;
