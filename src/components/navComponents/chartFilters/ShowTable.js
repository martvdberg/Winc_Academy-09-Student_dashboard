import React from "react";

function ShowTable({ chartFilters, handleChangeChartCheckboxes }) {
  return (
    <div className="menu__subMenu">
      {/* <span
        className="menu__option"
        onClick={(event) => {
          handleChangeChartCheckboxes(event);
        }}
      >
        Show table
      </span> */}

      <label
        htmlFor="showTable"
        className="menu__option menu__option--special "
      >
        <input
          type="checkbox"
          id="showTable"
          className="menu__option--hide"
          value="table"
          checked={chartFilters.table}
          onChange={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        Show table
      </label>
    </div>
  );
}

export default ShowTable;
