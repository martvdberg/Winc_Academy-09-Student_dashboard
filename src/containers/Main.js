import React from "react";
import { Routes, Route } from "react-router-dom";
import MainOverview from "../components/mainView/MainOverview";
import StudentOverview from "../components/mainView/StudentOverview";
import { generateId } from "../util";
import "../styles/main/main.css";

function Main({
  students,
  average,
  handleAllSelectedStudents,
  chartFilters,
  allSelectedStudents,
  loading,
}) {
  // create a path for each student

  const studentPages = students.map((student) => {
    // create an array with integers as value for the assignments
    // const assignments = student.assignments.map((task) => {
    //   return {
    //     task: task.task,
    //     fun: parseInt(task.fun),
    //     diff: parseInt(task.diff),
    //   };
    // });

    return (
      <Route
        path={`/${student.details.firstName}`}
        key={generateId()}
        element={
          <StudentOverview
            student={student}
            chartData={student.assignments}
            handleAllSelectedStudents={handleAllSelectedStudents}
            chartFilters={chartFilters}
          />
        }
      />
    );
  });

  return (
    <section className="main">
      <Routes>
        <Route
          path="/"
          element={
            <MainOverview
              average={average}
              chartFilters={chartFilters}
              students={allSelectedStudents}
              loading={loading}
            />
          }
        />
        {studentPages}
      </Routes>
    </section>
  );
}

export default Main;
