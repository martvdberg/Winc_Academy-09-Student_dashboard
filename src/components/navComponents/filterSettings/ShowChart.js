import React from "react";

function ShowChart({ filterSettings, handleFilterSettings }) {
  return (
    <div className="menu__subMenu">
      <h3 className="menu__subMenu--header">Choose data</h3>
      <label htmlFor="funChart" className="menu__option">
        <input
          type="checkbox"
          id="funChart"
          className="menu__option--checkbox"
          value="funChart"
          checked={filterSettings.funChart}
          onChange={(event) => {
            handleFilterSettings(event);
          }}
        />
        Fun
      </label>

      <label htmlFor="diffChart" className="menu__option">
        <input
          type="checkbox"
          id="diffChart"
          className="menu__option--checkbox"
          value="diffChart"
          checked={filterSettings.diffChart}
          onChange={(event) => {
            handleFilterSettings(event);
          }}
        />
        Difficult
      </label>
    </div>
  );
}

export default ShowChart;
