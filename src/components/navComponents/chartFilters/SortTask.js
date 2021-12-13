import React from "react";

function SortTask({ handleChangeChartCheckboxes, chartFilters }) {
  return (
    <div className="chartList__sortTask  chartList__wrapper">
      <h3 className="chartList__header chartList__sortTask--header">
        Sort tasks
      </h3>
      <div className="chartList__optionWrapper">
        <input
          type="radio"
          id="sortNone"
          className="chartList__sortTask--option"
          name="sortTask"
          value="sortNone"
          checked={chartFilters.sortNone}
          onChange={() => {}}
          onClick={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        <label htmlFor="sortNone" className="chartList__sortTask--text">
          None
        </label>
        <input
          type="radio"
          id="sortFun"
          className="chartList__sortTask--option"
          name="sortTask"
          value="sortFun"
          checked={chartFilters.sortFun}
          onChange={() => {}}
          onClick={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        <label htmlFor="sortFun" className="chartList__sortTask--text">
          Fun
        </label>
        <input
          type="radio"
          id="sortDiff"
          className="chartList__sortTask--option"
          name="sortTask"
          value="sortDiff"
          checked={chartFilters.sortDiff}
          onChange={() => {}}
          onClick={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />

        <label htmlFor="sortDiff" className="chartList__sortTask--text">
          Difficult
        </label>
      </div>
    </div>
  );
}

export default SortTask;
