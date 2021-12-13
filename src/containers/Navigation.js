import React, { useState } from "react";
import SelectSingleStudent from "../components/navComponents/SelectSingleStudent";
import SelectMultipleStudents from "../components/navComponents/SelectMultipleStudents";
import SelectChartFilters from "../components/navComponents/chartFilters/SelectChartFIlters";
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

  const handleMouseOverShowItems = (event) => {
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
        [targetElement]: true,
      });
    }
  };

  const handleMouseOutHideItems = () => {
    setShowItems({
      StudentLinks: false,
      StudentCheckboxes: false,
      ChartFilters: false,
    });
  };

  return (
    <nav className="nav">
      <SelectSingleStudent
        students={dataPerStudent}
        showItems={showItems}
        handleMouseOverShowItems={handleMouseOverShowItems}
        handleMouseOutHideItems={handleMouseOutHideItems}
      />
      <SelectMultipleStudents
        students={dataPerStudent}
        showItems={showItems}
        handleMouseOverShowItems={handleMouseOverShowItems}
        handleMouseOutHideItems={handleMouseOutHideItems}
        handleChangeStudentCheckbox={handleChangeStudentCheckbox}
        handleSubmitSelectedStudents={handleSubmitSelectedStudents}
        handleAllSelectedStudents={handleAllSelectedStudents}
      />

      <SelectChartFilters
        showItems={showItems}
        handleMouseOverShowItems={handleMouseOverShowItems}
        handleMouseOutHideItems={handleMouseOutHideItems}
        handleChangeChartCheckboxes={handleChangeChartCheckboxes}
        chartFilters={chartFilters}
      />
    </nav>
  );
}

export default Navigation;
