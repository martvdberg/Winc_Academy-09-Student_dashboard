import React from "react";

function ShowTable({ chartFilters, handleChangeChartCheckboxes }) {
  return (
    <div className="chartList__showTable  chartList__wrapper  ">
      {/* <h3 className="nav__header--sub  chartList__header chartList__showTable--header">
        Table?
      </h3> */}
      <div className="chartList__optionWrapper">
        <input
          type="checkbox"
          id="showTable"
          className="chartList__showTable--checkbox"
          value="table"
          checked={chartFilters.table}
          onChange={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        <label
          htmlFor="showTable"
          className="chartList__showTable--text nav__header--sub  chartList__header chartList__showTable--header "
        >
          Show table
        </label>
        {/*      
      <h3
        className={`nav__header--sub ${chartFilters.table ? "selected" : ""}`}
        title="table"
        onClick={(event) => {
          handleChangeChartCheckboxes(event);
        }}
      >
        Show table
      </h3> */}
      </div>
    </div>
  );
}

export default ShowTable;
