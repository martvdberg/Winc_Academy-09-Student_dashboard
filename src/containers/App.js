import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import StudentList from "./StudentsList";
import ChartFilter from "./ChartFilter";
import Main from "./Main";

import { BrowserRouter as Router } from "react-router-dom";

import { csvToArray, createObjectPerPerson } from "../util";

function App() {
  const [dataPerStudent, setdataPerStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch csv file from the public folder and put it into data
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await fetch("assets/studentMockData.csv");
      const result = await response.text();
      const arrayFromCsv = csvToArray(result);
      const arrayPerStudent = createObjectPerPerson(arrayFromCsv);
      setdataPerStudent(arrayPerStudent);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <StudentList students={dataPerStudent} />
        <ChartFilter />
        {loading ? <h1>Loading...</h1> : <Main students={dataPerStudent} />}
      </div>
    </Router>
  );
}

export default App;
