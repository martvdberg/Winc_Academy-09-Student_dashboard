import React from "react";
import { generateId } from "../../util";

function Table({ average }) {
  const tableRows = average.map((task) => {
    return (
      <tr key={generateId()}>
        <td>{task.task}</td>
        <td>{task.fun}</td>
        <td>{task.diff}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Fun</th>
          <th>Difficult</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

export default Table;
