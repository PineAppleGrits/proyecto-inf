import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = function () {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link
            to="/"
            style={{ fontFamily: 'monospace' }}
            className="col s5 brand-logo center black-text"
          >
            <i className="material-icons">code</i>
            Chat App
          </Link>
        </div>
        <button
          className="btn btn-action mr-5"
          type="button"
          onClick="halfmoon.toggleDarkMode()"
          aria-label="Toggle dark mode"
        >
          <i className="fa fa-moon-o" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
