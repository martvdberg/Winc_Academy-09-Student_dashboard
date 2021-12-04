import React, { useState, useEffect } from "react";
import { csvToArray, createObjectPerPerson } from "../util";

function App() {
  const [data, setData] = useState("");
  const [dataPerPerson, setDataPerPerson] = useState();

  // fetch csv file from the public folder and put it into data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("assets/studentMockData.csv");
      const result = await response.text();
      setData(result);
    };
    getData();
  }, []);

  // when data is set build the dataPerPerson array
  useEffect(() => {
    const arrayFromCsv = csvToArray(data);
    const arrayPerPeron = createObjectPerPerson(arrayFromCsv);
    setDataPerPerson(arrayPerPeron);
  }, [data]);

  return <div className="App"></div>;
}

export default App;
