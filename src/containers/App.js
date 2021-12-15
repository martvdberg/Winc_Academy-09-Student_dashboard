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
  const [chartFilters, setChartFilters] = useState({
    funChart: true,
    diffChart: true,
    lineGraph: false,
    barChart: true,
    table: false,
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
      setDataPerStudent(arrayPerStudent);
      setAveragePerTask(average);
      setLoading(false);
    };
    getData();
  }, []);

  // sort data when the option is selected in the settings filter menu
  useEffect(() => {
    let newState = [...averagePerTask];
    if (chartFilters.sortFun) {
      sortAssignmentByGrade(newState, "fun", chartFilters.sortOrder);
    } else if (chartFilters.sortDiff) {
      sortAssignmentByGrade(newState, "diff", chartFilters.sortOrder);
    }
    setSortedData(newState);
  }, [
    chartFilters.sortFun,
    chartFilters.sortDiff,
    chartFilters.sortOrder,
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
    return setDataPerStudent((prevState) => {
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

  // change checked property for all students when select all or reset is selected
  const handleAllSelectedStudents = (event) => {
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
    // reset the chart and selected students when reset is pressed
    if (!newCheckedStatus) {
      const selectedStudents = getSelectedStudents(newState);
      const newAverage = calcAverage(newState);
      setAllSelectedStudents(selectedStudents);
      setAveragePerTask(newAverage);
    }
  };

  // Event handler for when the apply button inside select multiple students gets clicked
  const handleSubmitSelectedStudents = () => {
    const newAverage = calcAverage(dataPerStudent);
    const selectedStudents = getSelectedStudents(dataPerStudent);
    setAveragePerTask(newAverage);
    setAllSelectedStudents(selectedStudents);
  };

  // Event handler to set all chart filter option chexboxes and radiobtn inputs
  const handleChangeChartCheckboxes = (event) => {
    setChartFilters((prevState) => {
      let newState;
      if (
        event.target.value === "lineGraph" ||
        event.target.value === "barChart"
      ) {
        newState = {
          ...prevState,
          lineGraph: false,
          barChart: false,
          [event.target.value]: true,
        };
      }
      // select sort option or fun, diff or none
      else if (
        event.target.value === "sortNone" ||
        event.target.value === "sortFun" ||
        event.target.value === "sortDiff"
      ) {
        newState = {
          ...prevState,
          sortFun: false,
          sortDiff: false,
          sortNone: false,
          [event.target.value]: true,
        };
      } else if (event.target.title === "sortOrder") {
        newState = {
          ...prevState,
          sortOrder: !prevState.sortOrder,
        };
      }
      // Select to show fun chart, diff chart or both and also handle show table
      else {
        newState = {
          ...prevState,
          [event.target.value]: !prevState[event.target.value],
        };
      }
      // make sure there will always be a graph (line or bar) visible
      if (!newState.funChart && !newState.diffChart) {
        newState = {
          ...newState,
          funChart: true,
          diffChart: true,
          [event.target.value]: false,
        };
      }
      return newState;
    });
  };

  return (
    <Router>
      <div className="app">
        <Header handleAllSelectedStudents={handleAllSelectedStudents} />
        <Navigation
          dataPerStudent={dataPerStudent}
          handleChangeStudentCheckbox={handleChangeStudentCheckbox}
          handleSubmitSelectedStudents={handleSubmitSelectedStudents}
          handleAllSelectedStudents={handleAllSelectedStudents}
          handleChangeChartCheckboxes={handleChangeChartCheckboxes}
          chartFilters={chartFilters}
        />

        <Main
          students={dataPerStudent}
          average={
            chartFilters.sortFun || chartFilters.sortDiff
              ? sortedData
              : averagePerTask
          }
          handleAllSelectedStudents={handleAllSelectedStudents}
          chartFilters={chartFilters}
          allSelectedStudents={allSelectedStudents}
          loading={loading}
        />
      </div>
    </Router>
  );
}

export default App;
