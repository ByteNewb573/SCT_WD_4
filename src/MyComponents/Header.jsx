import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ai-navbar">
      <div className="container-fluid">
        <a className="navbar-brand ai-logo" href="#">
         TODO App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link ai-link" to="/">
      Home
    </Link>
              
            </li>

            <li className="nav-item">
               <Link className="nav-link ai-link" to="/about">
      About
    </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link ai-link" to="/add-todo">
      AddTodo
    </Link>
            </li>

             <li className="nav-item">
                <Link className="nav-link ai-link" to="/todo-list">
      Todos
    </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;