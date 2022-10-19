/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNav() {
  function toggle() {
    document.querySelector('.animated-burger').classList.toggle('open');
  }
  return (
    <div>
      <div className="main-header">
        <div>
          Developer Portfolio
          <span> &mdash; Brandon Harmon</span>
          <hr className="transition-hightlight" />
        </div>
      </div>

      <nav className="navbar navbar-expand-md navbar-dark navbar-green px-5">
        <NavLink className="navbar-brand" to="/portfolio">
          WELCOME
        </NavLink>

        <button
          onClick={toggle}
          className="navbar-toggler third-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-main"
          aria-controls="nav-main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="animated-burger">
            <span />
            <span />
            <span />
          </div>
        </button>

        <div className="collapse navbar-collapse" id="nav-main">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active px-2">
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
