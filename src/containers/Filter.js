import React, { useEffect, useState } from "react";
import ChartFilter from "../components/chartFilter/ChartFilter";
import StudentFilter from "../components/studentFilter/StudentsFilter";

function Filter({ dataPerStudent, handleSubmit }) {
  const [showItems, setShowItems] = useState({
    StudentLinks: false,
    StudentCheckboxes: false,
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(dataPerStudent);
  }, [dataPerStudent]);

  // const students = dataPerStudent.map((student) => {
  //   return {
  //     firstName: student.details.firstName,
  //     lastName: student.details.lastName,
  //     id: student.details.id,
  //     checked: student.details.checked,
  //   };
  // });

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

  const handleChangeStudentCheckbox = (event) => {
    setStudents((prevState) => {
      const newState = prevState.map((student, index) => {
        if (student.details.id === event.target.value) {
          return {
            details: {
              ...student.details,
              checked: !prevState[index].details.checked,
            },
            assignments: [...student.assignments],
          };
        } else {
          return { ...student };
        }
      });
      return newState;
    });
  };

  return (
    <section className="filterContainer">
      <StudentFilter
        students={students}
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
