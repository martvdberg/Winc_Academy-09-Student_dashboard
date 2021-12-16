import React, { useState } from "react";
import SelectSingleStudent from "../components/navComponents/SelectSingleStudent";
import SelectMultipleStudents from "../components/navComponents/SelectMultipleStudents";
import SelectFilterSettings from "../components/navComponents/SelectfilterSettings";
import "../styles/nav/nav.css";

function Navigation({
  dataPerStudent,
  handleChangeStudentCheckbox,
  handleSelectAllStudents,
  handleFilterSettings,
  filterSettings,
}) {
  const [showItems, setShowItems] = useState({
    StudentLinks: false,
    StudentCheckboxes: false,
    filterSettings: false,
  });

  // set state to show the menu items when the mouse enters
  const handleMouseOverShowItems = (event) => {
    const targetElement = event.target.id.slice(4);
    if (
      targetElement === "StudentLinks" ||
      targetElement === "StudentCheckboxes" ||
      targetElement === "filterSettings"
    ) {
      setShowItems({
        StudentLinks: false,
        StudentCheckboxes: false,
        filterSettings: false,
        [targetElement]: true,
      });
    }
  };

  // set state to hide the menu items when the mouse leaves
  const handleMouseOutHideItems = () => {
    setShowItems({
      StudentLinks: false,
      StudentCheckboxes: false,
      filterSettings: false,
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
        handleSelectAllStudents={handleSelectAllStudents}
      />

      <SelectFilterSettings
        showItems={showItems}
        handleMouseOverShowItems={handleMouseOverShowItems}
        handleMouseOutHideItems={handleMouseOutHideItems}
        handleFilterSettings={handleFilterSettings}
        filterSettings={filterSettings}
      />
    </nav>
  );
}

export default Navigation;
