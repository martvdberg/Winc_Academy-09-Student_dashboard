import React from "react";
import { Routes, Route } from "react-router-dom";
import MainOverview from "../components/mainView/MainOverview";
import StudentOverview from "../components/mainView/StudentOverview";
import { generateId, sortAssignmentByGrade } from "../util";
import "../styles/main/main.css";

function Main({
  students,
  average,
  handleAllSelectedStudents,
  filterSettings,
  allSelectedStudents,
  loading,
}) {
  // create a path for each student
  const studentPages = students.map((student) => {
    // sort the assignments when filterSettings.sortFun or ...diff is true
    let assignments = [...student.assignments];
    if (filterSettings.sortFun) {
      sortAssignmentByGrade(assignments, "fun", filterSettings.sortOrder);
    } else if (filterSettings.sortDiff) {
      sortAssignmentByGrade(assignments, "diff", filterSettings.sortOrder);
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
            filterSettings={filterSettings}
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
              filterSettings={filterSettings}
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
