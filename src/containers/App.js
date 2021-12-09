import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../components/Header";
import Main from "./Main";
import Filter from "./Filter";
import { csvToArray, createObjectPerPerson } from "../util";

import "../styles/app.css";

function App() {
  const [dataPerStudent, setDataPerStudent] = useState([]);
  const [averagePerTask, setAveragePerTask] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch csv file from the public folder and put it into data
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await fetch("assets/studentMockData.csv");
      const result = await response.text();
      const arrayFromCsv = csvToArray(result);
      const arrayPerStudent = createObjectPerPerson(arrayFromCsv);
      setDataPerStudent(arrayPerStudent);
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    const calcAverage = (studentsData) => {
      if (studentsData[0] !== undefined) {
        // creat an array wih all the assignments
        const assignments = studentsData[0].assignments.map((e) => {
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
    const average = calcAverage(dataPerStudent);
    setAveragePerTask(average);
  }, [dataPerStudent]);

  const handleSubmit = (e, students) => {
    e.preventDefault();
    setDataPerStudent(students);
  };
  return (
    <Router>
      <div className="mainWrapper">
        <Header />
        <Filter dataPerStudent={dataPerStudent} handleSubmit={handleSubmit} />
        {loading ? (
          <h1 className="mainContainer">Loading...</h1>
        ) : (
          <Main students={dataPerStudent} average={averagePerTask} />
        )}
      </div>
    </Router>
  );
}

export default App;
