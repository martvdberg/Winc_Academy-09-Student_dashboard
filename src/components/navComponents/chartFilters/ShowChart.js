import React from "react";

function ShowChart({ chartFilters, handleChangeChartCheckboxes }) {
  return (
    <div className="menu__subMenu">
      <h3 className="menu__subMenu--header">Choose data</h3>
      <label htmlFor="filterFun" className="menu__option">
        <input
          type="checkbox"
          id="filterFun"
          className="menu__option--checkbox"
          value="funChart"
          checked={chartFilters.funChart}
          onChange={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        Fun
      </label>

      <label htmlFor="filterDiff" className="menu__option">
        <input
          type="checkbox"
          id="filterDiff"
          className="menu__option--checkbox"
          value="diffChart"
          checked={chartFilters.diffChart}
          onChange={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        Difficult
      </label>
    </div>
  );
}

export default ShowChart;
