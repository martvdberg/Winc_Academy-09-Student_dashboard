import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1 className="header__link--top">Student</h1>
        <h1 className="header__link--bottom">dashboard</h1>
      </Link>
    </header>
  );
}

export default Header;
