/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <div>
      <div className="main-header">
        <div>
          Brandon Harmon
          <span> &mdash; Developer Portfolio</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark navbar-green px-5">
        <NavLink className="navbar-brand" to="/portfolio">
          WELCOME
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to="/portfolio"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to="/dev-portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;
