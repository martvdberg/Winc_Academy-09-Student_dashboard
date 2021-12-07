import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import StudentList from "./StudentsList";
import ChartFilter from "./ChartFilter";
import MainView from "./MainView";

import { csvToArray, createObjectPerPerson } from "../util";

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

function App() {
  const [data, setData] = useState("");
  const [dataPerStudent, setdataPerStudent] = useState([]);
  const [avarege, setAvarege] = useState([]);

  // fetch csv file from the public folder and put it into data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("assets/studentMockData.csv");
      const result = await response.text();
      const arrayFromCsv = csvToArray(result);
      const arrayPerStudent = createObjectPerPerson(arrayFromCsv);
      setData(result);
      setdataPerStudent(arrayPerStudent);
    };
    getData();
  }, []);

  // when dataPerStudent change(becuase a student get selected) calc new avarge per assignment
  // need to filter students who have been selected and if none pass the whole array of students
  useEffect(() => {
    setAvarege(calcAverage(dataPerStudent));
  }, [dataPerStudent]);

  return (
    <div className="App">
      <Header />
      <StudentList students={dataPerStudent} />
      <ChartFilter />

      <MainView avarege={avarege} />
    </div>
  );
}

export default App;
