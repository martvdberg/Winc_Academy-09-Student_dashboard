import React from "react";
import { Link } from "react-router-dom";

function Header({ handleAllSelectedStudents }) {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1
          title="reset"
          className="header__link--top"
          onClick={(event) => {
            handleAllSelectedStudents(event);
          }}
        >
          Student
        </h1>
        <h1
          title="reset"
          className="header__link--bottom"
          onClick={(event) => {
            handleAllSelectedStudents(event);
          }}
        >
          dashboard
        </h1>
      </Link>
    </header>
  );
}

export default Header;
