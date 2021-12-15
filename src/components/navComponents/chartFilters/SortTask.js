import React from "react";

function SortTask({ handleChangeChartCheckboxes, chartFilters }) {
  return (
    <div className="menu__subMenu">
      <h3 className="menu__subMenu--header">Sort tasks</h3>
      <label htmlFor="sortNone" className="menu__option">
        <input
          type="radio"
          id="sortNone"
          className="menu__option--checkbox"
          name="sortTask"
          value="sortNone"
          checked={chartFilters.sortNone}
          onChange={() => {}}
          onClick={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        None
      </label>
      <label htmlFor="sortFun" className="menu__option">
        <input
          type="radio"
          id="sortFun"
          className="menu__option--checkbox"
          name="sortTask"
          value="sortFun"
          checked={chartFilters.sortFun}
          onChange={() => {}}
          onClick={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        Fun
      </label>
      <label htmlFor="sortDiff" className="menu__option">
        <input
          type="radio"
          id="sortDiff"
          className="menu__option--checkbox"
          name="sortTask"
          value="sortDiff"
          checked={chartFilters.sortDiff}
          onChange={() => {}}
          onClick={(event) => {
            handleChangeChartCheckboxes(event);
          }}
        />
        Difficult
      </label>
      <span
        title="sortOrder"
        className="menu__option menu__option--order"
        onClick={(event) => {
          handleChangeChartCheckboxes(event);
        }}
      >
        sort order
        <span className={chartFilters.sortOrder ? "selectedOrder" : ""}>
          &#x2193;
        </span>
        <span className={!chartFilters.sortOrder ? "selectedOrder" : ""}>
          &#x2191;
        </span>
      </span>
    </div>
  );
}

export default SortTask;
