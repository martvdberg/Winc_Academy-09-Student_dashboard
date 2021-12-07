import React from "react";
import Chart from "../components/Chart";

function StudentOverview({ student }) {
  console.log(student.assignments);
  return (
    <div>
      <h2>Student overview</h2>
      <section>
        <p>
          Name: {`${student.details.firstName} ${student.details.lastName}`}{" "}
          <br />
          Age: {student.details.age}
          <br />
          email: {student.details.email}
        </p>
      </section>

      <Chart average={student.assignments} />
    </div>
  );
}

export default StudentOverview;
