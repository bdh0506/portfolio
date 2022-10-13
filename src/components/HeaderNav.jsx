import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <div>
      <div className="main-header">
        <div>Brandon Harmon &mdash; Developer Portfolio</div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          WELCOME
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/portfolio">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dev-portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;
