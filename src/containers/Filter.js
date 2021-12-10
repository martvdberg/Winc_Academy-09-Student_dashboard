import React, { useState } from "react";
import SelectSingleStudent from "../components/filterComponents/SelectSingleStudent";
import SelectMultipleStudents from "../components/filterComponents/SelectMultipleStudents";
import SelectChartFilters from "../components/filterComponents/SelectChartFIlters";

function Filter({
  dataPerStudent,
  handleSubmitSelectedStudents,
  handleChangeStudentCheckbox,
  handleAllSelectedStudents,
}) {
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

      <SelectChartFilters />
    </section>
  );
}

export default Filter;
