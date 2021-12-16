import React from "react";
import { Link } from "react-router-dom";

import "../styles/header/header.css";

function Header({ handleSelectAllStudents }) {
  return (
    <header className="header">
      <Link to="/" className="header__text header__link">
        <h1
          title="reset"
          className="header__text--top"
          onClick={(event) => {
            handleSelectAllStudents(event);
          }}
        >
          Student dashboard
        </h1>
      </Link>
    </header>
  );
}

export default Header;
