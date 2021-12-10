import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../components/Header";
import Main from "./Main";
import Filter from "./Filter";
import {
  csvToArray,
  createObjectPerPerson,
  sortByTask,
  getSelectedStudents,
} from "../util";

import "../styles/app.css";

function App() {
  const [dataPerStudent, setDataPerStudent] = useState([]);
  const [averagePerTask, setAveragePerTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chartFilters, setChartFilters] = useState({
    funChart: true,
    diffChart: true,
    lineGraph: false,
    barChart: true,
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
            assignments[indexOfTask].fun + parseInt(taskPerStudent.fun);
          assignments[indexOfTask].diff =
            assignments[indexOfTask].diff + parseInt(taskPerStudent.diff);
        });
      });

      // calc average for fun and diff -> divide the total with the amount of students
      const averagePerTask = assignments.map((task) => {
        return {
          task: task.task,
          fun: task.fun / arrayForCalc.length,
          diff: task.diff / arrayForCalc.length,
        };
      });
      return averagePerTask;
    }
  };

  const handleChangeStudentCheckbox = (event) => {
    setDataPerStudent((prevState) => {
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
    const newAverage = calcAverage(newState);
    setDataPerStudent(newState);
    setAveragePerTask(newAverage);
  };

  const handleSubmitSelectedStudents = () => {
    const newAverage = calcAverage(dataPerStudent);
    setAveragePerTask(newAverage);
  };

  const handleChangeChartCheckboxes = (event) => {
    console.log(event.target.value);
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
      } else {
        newState = {
          ...prevState,
          [event.target.value]: !prevState[event.target.value],
        };
      }
      // make sure there will always be a graph visible
      if (!newState.funChart && !newState.diffChart) {
        newState = {
          ...newState,
          [event.target.value]: true,
        };
      }
      return newState;
    });
  };

  return (
    <Router>
      <div className="mainWrapper">
        <Header handleAllSelectedStudents={handleAllSelectedStudents} />
        <Filter
          dataPerStudent={dataPerStudent}
          handleChangeStudentCheckbox={handleChangeStudentCheckbox}
          handleSubmitSelectedStudents={handleSubmitSelectedStudents}
          handleAllSelectedStudents={handleAllSelectedStudents}
          handleChangeChartCheckboxes={handleChangeChartCheckboxes}
          chartFilters={chartFilters}
        />
        {loading ? (
          <h1 className="mainContainer">Loading...</h1>
        ) : (
          <Main
            students={dataPerStudent}
            average={averagePerTask}
            handleAllSelectedStudents={handleAllSelectedStudents}
            chartFilters={chartFilters}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
