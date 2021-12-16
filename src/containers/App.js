import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../components/Header";
import Main from "./Main";
import Navigation from "./Navigation";
import {
  csvToArray,
  createObjectPerPerson,
  sortByTask,
  getSelectedStudents,
  sortAssignmentByGrade,
} from "../util";

import "../styles/app/app.css";

function App() {
  const [dataPerStudent, setDataPerStudent] = useState([]);
  const [averagePerTask, setAveragePerTask] = useState([]);
  const [allSelectedStudents, setAllSelectedStudents] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterSettings, setFilterSettings] = useState({
    funChart: true,
    diffChart: true,
    lineGraph: false,
    barChart: true,
    showTable: false,
    sortFun: false,
    sortDiff: false,
    sortNone: true,
    sortOrder: false,
  });

  // fetch csv file from the public folder and put it into data
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await fetch("assets/studentMockData.csv");
      const result = await response.text();
      const arrayFromCsv = csvToArray(result);
      const arrayPerStudent = createObjectPerPerson(arrayFromCsv);
      const average = calcAverage(arrayPerStudent);
      setAveragePerTask(average);
      setDataPerStudent(arrayPerStudent);
      setLoading(false);
    };
    getData();
  }, []);

  // sort data when the option is selected in the filter settings menu
  useEffect(() => {
    let newState = [...averagePerTask];
    if (filterSettings.sortFun) {
      sortAssignmentByGrade(newState, "fun", filterSettings.sortOrder);
    } else if (filterSettings.sortDiff) {
      sortAssignmentByGrade(newState, "diff", filterSettings.sortOrder);
    }
    setSortedData(newState);
  }, [
    filterSettings.sortFun,
    filterSettings.sortDiff,
    filterSettings.sortOrder,
    averagePerTask,
  ]);

  // Function to calculate the average per task for one or more students
  const calcAverage = (studentsData) => {
    if (studentsData[0] !== undefined) {
      // get an array wih all the assignments
      const assignments = sortByTask(studentsData);
      // get an array with all the selected students
      const selectedStudents = getSelectedStudents(studentsData);
      //  decide wich array to use
      let arrayForCalc;
      if (selectedStudents.length > 0) {
        arrayForCalc = selectedStudents;
      } else {
        arrayForCalc = studentsData;
      }

      // fill the assignments array with the total scores per task per student
      arrayForCalc.forEach((student) => {
        student.assignments.forEach((taskPerStudent) => {
          const indexOfTask = assignments.findIndex(
            (e) => e.task === taskPerStudent.task
          );
          assignments[indexOfTask].fun =
            assignments[indexOfTask].fun + taskPerStudent.fun;
          assignments[indexOfTask].diff =
            assignments[indexOfTask].diff + taskPerStudent.diff;
        });
      });

      // calc average for fun and diff -> divide the total with the amount of students
      const averagePerTask = assignments.map((task) => {
        const fun = task.fun / arrayForCalc.length;
        const diff = task.diff / arrayForCalc.length;

        return {
          task: task.task,
          fun: parseFloat(fun.toFixed(1)),
          diff: parseFloat(diff.toFixed(1)),
        };
      });
      return averagePerTask;
    }
  };

  // set the checked property to true or false when a student gets selected or deselected
  const handleChangeStudentCheckbox = (event) => {
    const newState = dataPerStudent.map((student, index) => {
      if (student.details.id === event.target.value) {
        return {
          details: {
            ...student.details,
            checked: !dataPerStudent[index].details.checked,
          },
          assignments: [...student.assignments],
        };
      } else {
        return { ...student };
      }
    });

    const selectedStudents = getSelectedStudents(newState);
    const newAverage = calcAverage(newState);
    setDataPerStudent(newState);
    setAllSelectedStudents(selectedStudents);
    setAveragePerTask(newAverage);
  };

  // change checked property for all students when select all or reset is selected
  const handleSelectAllStudents = (event) => {
    const newCheckedStatus = event.target.title === "reset" ? false : true;
    const newState = dataPerStudent.map((student) => {
      return {
        details: {
          ...student.details,
          checked: newCheckedStatus,
        },
        assignments: [...student.assignments],
      };
    });

    setDataPerStudent(newState);
    const selectedStudents = getSelectedStudents(newState);
    const newAverage = calcAverage(newState);
    setAllSelectedStudents(selectedStudents);
    setAveragePerTask(newAverage);
  };

  // Event handler to set all chart filter option chexboxes and radiobtn inputs
  const handleFilterSettings = (event) => {
    const elementId = event.target.id;

    setFilterSettings((prevState) => {
      let newState;
      if (elementId === "lineGraph" || elementId === "barChart") {
        newState = {
          ...prevState,
          lineGraph: false,
          barChart: false,
          [elementId]: true,
        };
      } else if (
        elementId === "sortNone" ||
        elementId === "sortFun" ||
        elementId === "sortDiff"
      ) {
        newState = {
          ...prevState,
          sortFun: false,
          sortDiff: false,
          sortNone: false,
          [elementId]: true,
        };
      } else {
        newState = {
          ...prevState,
          [elementId]: !prevState[elementId],
        };
      }

      // make sure there will always be a graph (line or bar) visible
      if (!newState.funChart && !newState.diffChart) {
        newState = {
          ...newState,
          funChart: true,
          diffChart: true,
          [elementId]: false,
        };
      }
      return newState;
    });
  };

  return (
    <Router>
      <div className="app">
        <Header handleSelectAllStudents={handleSelectAllStudents} />
        <Navigation
          dataPerStudent={dataPerStudent}
          handleChangeStudentCheckbox={handleChangeStudentCheckbox}
          handleSelectAllStudents={handleSelectAllStudents}
          handleFilterSettings={handleFilterSettings}
          filterSettings={filterSettings}
        />

        <Main
          students={dataPerStudent}
          average={
            filterSettings.sortFun || filterSettings.sortDiff
              ? sortedData
              : averagePerTask
          }
          handleSelectAllStudents={handleSelectAllStudents}
          filterSettings={filterSettings}
          allSelectedStudents={allSelectedStudents}
          loading={loading}
        />
      </div>
    </Router>
  );
}

export default App;
