import React, { useState } from "react";
import SelectSingleStudent from "../components/filterComponents/SelectSingleStudent";
import SelectMultipleStudents from "../components/filterComponents/SelectMultipleStudents";
import SelectChartFilters from "../components/filterComponents/SelectChartFIlters";

function Filter({
  dataPerStudent,
  handleSubmitSelectedStudents,
  handleChangeStudentCheckbox,
  handleAllSelectedStudents,
  handleChangeChartCheckboxes,
  chartFilters,
}) {
  const [showItems, setShowItems] = useState({
    StudentLinks: false,
    StudentCheckboxes: false,
    ChartFilters: false,
  });

  const handleClickShowItems = (event) => {
    const targetElement = event.target.id.slice(4);
    if (
      targetElement === "StudentLinks" ||
      targetElement === "StudentCheckboxes" ||
      targetElement === "ChartFilters"
    ) {
      setShowItems({
        StudentLinks: false,
        StudentCheckboxes: false,
        ChartFilters: false,
        [targetElement]: !showItems[targetElement],
      });
    } else {
      setShowItems({
        StudentLinks: false,
        StudentCheckboxes: false,
        ChartFilters: false,
      });
    }
  };

  return (
    <section className="filter">
      <SelectSingleStudent
        students={dataPerStudent}
        showItems={showItems}
        handleClickShowItems={handleClickShowItems}
      />
      <SelectMultipleStudents
        students={dataPerStudent}
        showItems={showItems}
        handleClickShowItems={handleClickShowItems}
        handleChangeStudentCheckbox={handleChangeStudentCheckbox}
        handleSubmitSelectedStudents={handleSubmitSelectedStudents}
        handleAllSelectedStudents={handleAllSelectedStudents}
      />

      <SelectChartFilters
        showItems={showItems}
        handleClickShowItems={handleClickShowItems}
        handleChangeChartCheckboxes={handleChangeChartCheckboxes}
        chartFilters={chartFilters}
      />
    </section>
  );
}

export default Filter;
