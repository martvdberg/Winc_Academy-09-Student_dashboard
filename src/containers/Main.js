import React from "react";
import { Routes, Route } from "react-router-dom";
import MainOverview from "../components/mainView/MainOverview";
import StudentOverview from "../components/mainView/StudentOverview";
import { generateId } from "../util";

// const calcAverage = (studentsData) => {
//   if (studentsData[0] !== undefined) {
//     // creat an array wih all the assignments
//     let assignments = studentsData[0].assignments.map((e) => {
//       return {
//         task: e.task,
//         fun: 0,
//         diff: 0,
//       };
//     });

//     // fill the assignments array with the total scores per task per student
//     studentsData.forEach((student) => {
//       student.assignments.forEach((taskPerStudent) => {
//         const indexOfTask = assignments.findIndex(
//           (e) => e.task === taskPerStudent.task
//         );
//         assignments[indexOfTask].fun =
//           assignments[indexOfTask].fun + parseInt(taskPerStudent.fun);
//         assignments[indexOfTask].diff =
//           assignments[indexOfTask].diff + parseInt(taskPerStudent.diff);
//       });
//     });

//     // calc average for fun and diff -> divide the total with the amount of students
//     const averagePerTask = assignments.map((task) => {
//       return {
//         task: task.task,
//         fun: task.fun / studentsData.length,
//         diff: task.diff / studentsData.length,
//       };
//     });
//     return averagePerTask;
//   }
// };

function Main({ students, average }) {
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
        element={<StudentOverview student={student} chartData={assignments} />}
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
