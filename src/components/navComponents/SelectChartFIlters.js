import React from "react";
import ShowChart from "./chartFilters/ShowChart";
import ShowTable from "./chartFilters/ShowTable";
import SortTask from "./chartFilters/SortTask";
import TypeOfGraph from "./chartFilters/TypeOfGraph";

function SelectChartFilters({
  handleMouseOverShowItems,
  handleMouseOutHideItems,
  showItems,
  handleChangeChartCheckboxes,
  chartFilters,
}) {
  return (
    <div className="nav__menu" onMouseLeave={handleMouseOutHideItems}>
      <h2
        className="nav__header"
        id="showChartFilters"
        onMouseEnter={(event) => handleMouseOverShowItems(event)}
      >
        Settings
      </h2>
      <div className={`menu ${showItems.ChartFilters ? "" : "hidden"}`}>
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
