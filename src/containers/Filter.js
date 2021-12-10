import React, { useState } from "react";
import ChartFilter from "../components/chartFilter/ChartFilter";
import StudentFilter from "../components/studentFilter/StudentsFilter";

function Filter({ dataPerStudent, handleSubmit, handleChangeStudentCheckbox }) {
  const [showItems, setShowItems] = useState({
    StudentLinks: false,
    StudentCheckboxes: false,
  });

  const handleClickShowItems = (event) => {
    const targetElement = event.target.id.slice(4);
    if (
      targetElement === "StudentLinks" ||
      targetElement === "StudentCheckboxes"
    ) {
      setShowItems({
        StudentLinks: false,
        StudentCheckboxes: false,
        [targetElement]: !showItems[targetElement],
      });
    } else {
      setShowItems({
        StudentLinks: false,
        StudentCheckboxes: false,
      });
    }
  };

  return (
    <section className="filterContainer">
      <StudentFilter
        students={dataPerStudent}
        showItems={showItems}
        handleClickShowItems={handleClickShowItems}
        handleChangeStudentCheckbox={handleChangeStudentCheckbox}
        handleSubmit={handleSubmit}
      />
      <ChartFilter />
    </section>
  );
}

export default Filter;
