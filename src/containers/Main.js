import React from "react";
import { Routes, Route } from "react-router-dom";
import MainOverview from "../components/mainView/MainOverview";
import StudentOverview from "../components/mainView/StudentOverview";

function Main({
  students,
  average,
  handleAllSelectedStudents,
  chartFilters,
  allSelectedStudents,
}) {
  // create a path for each student

  const studentPages = students.map((student) => {
    // create an array with integers as value for the assignments
    const assignments = student.assignments.map((task) => {
      return {
        task: task.task,
        fun: parseInt(task.fun),
        diff: parseInt(task.diff),
      };
    });

    return (
      <Route
        path={`/${student.details.firstName}`}
        element={
          <StudentOverview
            student={student}
            chartData={assignments}
            handleAllSelectedStudents={handleAllSelectedStudents}
            chartFilters={chartFilters}
          />
        }
      />
    );
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainOverview
            average={average}
            chartFilters={chartFilters}
            students={allSelectedStudents}
            // allSelectedStudents={allSelectedStudents}
          />
        }
      />
      {studentPages}
    </Routes>
  );
}

export default Main;
