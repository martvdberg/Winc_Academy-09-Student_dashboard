import React from "react";
import ShowChart from "./filterSettings/ShowChart";
import ShowTable from "./filterSettings/ShowTable";
import SortTask from "./filterSettings/SortTask";
import TypeOfGraph from "./filterSettings/TypeOfGraph";

function SelectFilterSettings({
  handleMouseOverShowItems,
  handleMouseOutHideItems,
  showItems,
  handleFilterSettings,
  filterSettings,
}) {
  return (
    <div className="nav__menu" onMouseLeave={handleMouseOutHideItems}>
      <h2
        className="nav__header"
        id="showfilterSettings"
        onMouseEnter={(event) => handleMouseOverShowItems(event)}
      >
        Settings
      </h2>
      <div className={`menu ${showItems.filterSettings ? "" : "hidden"}`}>
        <ShowChart
          filterSettings={filterSettings}
          handleFilterSettings={handleFilterSettings}
        />

        <TypeOfGraph
          filterSettings={filterSettings}
          handleFilterSettings={handleFilterSettings}
        />

        <SortTask
          handleFilterSettings={handleFilterSettings}
          filterSettings={filterSettings}
        />

        <ShowTable
          filterSettings={filterSettings}
          handleFilterSettings={handleFilterSettings}
        />
      </div>
    </div>
  );
}

export default SelectFilterSettings;
