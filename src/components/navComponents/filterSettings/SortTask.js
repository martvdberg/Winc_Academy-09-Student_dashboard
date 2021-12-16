import React from "react";

function SortTask({ handleFilterSettings, filterSettings }) {
  return (
    <div className="menu__subMenu">
      <h3 className="menu__subMenu--header">Sort by grades</h3>
      <label htmlFor="sortNone" className="menu__option">
        <input
          type="radio"
          id="sortNone"
          className="menu__option--checkbox"
          name="sortTask"
          value="sortNone"
          checked={filterSettings.sortNone}
          onChange={(event) => {
            handleFilterSettings(event);
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
          checked={filterSettings.sortFun}
          onChange={(event) => {
            handleFilterSettings(event);
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
          checked={filterSettings.sortDiff}
          onChange={(event) => {
            handleFilterSettings(event);
          }}
        />
        Difficult
      </label>
      <span
        id="sortOrder"
        className="menu__option menu__option--order"
        onClick={(event) => {
          handleFilterSettings(event);
        }}
      >
        sort order
        <span className={filterSettings.sortOrder ? "selectedOrder" : ""}>
          &#x2193;
        </span>
        <span className={!filterSettings.sortOrder ? "selectedOrder" : ""}>
          &#x2191;
        </span>
      </span>
    </div>
  );
}

export default SortTask;
