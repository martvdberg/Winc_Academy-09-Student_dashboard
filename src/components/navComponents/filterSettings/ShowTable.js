import React from "react";

function ShowTable({ filterSettings, handleFilterSettings }) {
  return (
    <div className="menu__subMenu">
      <label
        htmlFor="showTable"
        className="menu__option menu__option--special "
      >
        <input
          type="checkbox"
          id="showTable"
          className="menu__option--hide"
          value="table"
          checked={filterSettings.table}
          onChange={(event) => {
            handleFilterSettings(event);
          }}
        />
        Show table
      </label>
    </div>
  );
}

export default ShowTable;
