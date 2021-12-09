import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../components/Header";
import Main from "./Main";
import Filter from "./Filter";
import { csvToArray, createObjectPerPerson } from "../util";

import "../styles/app.css";

function App() {
  const [dataPerStudent, setDataPerStudent] = useState([]);
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
          <Main students={dataPerStudent} />
        )}
      </div>
    </Router>
  );
}

export default App;
