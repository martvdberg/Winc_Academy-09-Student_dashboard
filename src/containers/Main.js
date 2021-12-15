import React from "react";
import { Routes, Route } from "react-router-dom";
import MainOverview from "../components/mainView/MainOverview";
import StudentOverview from "../components/mainView/StudentOverview";
import { generateId, sortAssignmentByGrade } from "../util";
import "../styles/main/main.css";
import { useEffect, useState } from "react/cjs/react.development";

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
    // sort the assignments when chartFilters.sortFun or diff is true
    let assignments = [...student.assignments];
    if (chartFilters.sortFun) {
      sortAssignmentByGrade(assignments, "fun");
      // console.log("fun: ", student.assignments);
    } else if (chartFilters.sortDiff) {
      sortAssignmentByGrade(assignments, "diff");
      // console.log("diff: ", student.assignments);
    }
    // check sortOrder if true reverse array
    if (chartFilters.sortOrder) {
      assignments.reverse();
    }
    return (
      <Route
        path={`/${student.details.firstName}`}
        key={generateId()}
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
    <section className="main">
      <Routes>
        <Route
          path="/"
          element={
            <MainOverview
              chartData={average}
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
