import React from "react";

function TypeOfGraph({ filterSettings, handleFilterSettings }) {
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
          checked={filterSettings.barChart}
          onChange={(event) => {
            handleFilterSettings(event);
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
          checked={filterSettings.lineGraph}
          onChange={(event) => {
            handleFilterSettings(event);
          }}
        />
        Line
      </label>
    </div>
  );
}

export default TypeOfGraph;
