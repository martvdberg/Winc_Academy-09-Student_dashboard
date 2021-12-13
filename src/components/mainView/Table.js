import React from "react";
import { generateId } from "../../util";

function Table({ chartData }) {
  const tableRows = chartData.map((task) => {
    return (
      <tr key={generateId()} className="main__table--row">
        <td className="main__table--data">{task.task}</td>
        <td className="main__table--data">{task.fun}</td>
        <td className="main__table--data">{task.diff}</td>
      </tr>
    );
  });

  return (
    <table className="main__table">
      <thead className="main__table--row--head">
        <tr className="main__table--row">
          <th className="main__table--header main__table--task">Task</th>
          <th className="main__table--header main__table--rating">Fun</th>
          <th className="main__table--header main__table--rating">Difficult</th>
        </tr>
      </thead>
      <tbody className="main__table--body">{tableRows}</tbody>
    </table>
  );
}

export default Table;
