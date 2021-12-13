import React from "react";
import { Link } from "react-router-dom";

import "../styles/header/header.css";

function Header({ handleAllSelectedStudents }) {
  return (
    <header className="header">
      <Link to="/" className="header__text header__link">
        <h1
          title="reset"
          className="header__text--top"
          onClick={(event) => {
            handleAllSelectedStudents(event);
          }}
        >
          Student dashboard
        </h1>
        {/* <h1
          title="reset"
          className="header__text--bottom"
          onClick={(event) => {
            handleAllSelectedStudents(event);
          }}
        >
          dashboard
        </h1> */}
      </Link>
    </header>
  );
}

export default Header;
