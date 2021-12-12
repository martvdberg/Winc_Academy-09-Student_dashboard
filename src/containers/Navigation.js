import React, { useState } from "react";
import SelectSingleStudent from "../components/navComponents/SelectSingleStudent";
import SelectMultipleStudents from "../components/navComponents/SelectMultipleStudents";
import SelectChartFilters from "../components/navComponents/SelectChartFIlters";
import "../styles/nav/nav.css";

function Navigation({
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
    <nav className="nav">
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
    </nav>
  );
}

export default Navigation;