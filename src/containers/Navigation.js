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

  const [selectAllStatus, setSelectAllStatus] = useState(false);

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
  const handleSelectAllState = () => {
    setSelectAllStatus(!selectAllStatus);
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
        handleSelectAllState={handleSelectAllState}
        selectAllStatus={selectAllStatus}
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
