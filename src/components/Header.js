import React from "react";
import { Link } from "react-router-dom";

function Header({ handleResetSelectedStudents }) {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1
          className="header__link--top"
          onClick={() => {
            handleResetSelectedStudents();
          }}
        >
          Student
        </h1>
        <h1
          className="header__link--bottom"
          onClick={() => {
            handleResetSelectedStudents();
          }}
        >
          dashboard
        </h1>
      </Link>
    </header>
  );
}

export default Header;
