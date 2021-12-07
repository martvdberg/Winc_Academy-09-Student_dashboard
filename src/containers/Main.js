import React from "react";
import { Routes, Route } from "react-router-dom";
import MainOverview from "../components/MainOverview";
import StudentOverview from "../components/StudentOverview";
import { generateId } from "../util";

const calcAverage = (studentsData) => {
  if (studentsData[0] !== undefined) {
    // creat an array wih all the assignments
    let assignments = studentsData[0].assignments.map((e) => {
      return {
        task: e.task,
        fun: 0,
        diff: 0,
      };
    });

    // fill the assignments array with the total scores per task per student
    studentsData.forEach((student) => {
      student.assignments.forEach((taskPerStudent) => {
        const indexOfTask = assignments.findIndex(
          (e) => e.task === taskPerStudent.task
        );
        assignments[indexOfTask].fun =
          assignments[indexOfTask].fun + parseInt(taskPerStudent.fun);
        assignments[indexOfTask].diff =
          assignments[indexOfTask].diff + parseInt(taskPerStudent.diff);
      });
    });

    // calc average for fun and diff -> divide the total with the amount of students
    const averagePerTask = assignments.map((task) => {
      return {
        task: task.task,
        fun: task.fun / studentsData.length,
        diff: task.diff / studentsData.length,
      };
    });
    return averagePerTask;
  }
};

function Main({ students }) {
  const average = calcAverage(students);

  const studentPages = students.map((student) => {
    const chartData = calcAverage([student]);
    return (
      <Route
        path={`/${student.details.firstName}`}
        element={<StudentOverview student={student} chartData={chartData} />}
      />
    );
  });

  return (
    <Routes>
      <Route path="/" element={<MainOverview average={average} />} />
      {studentPages}
    </Routes>
  );
}

export default Main;
