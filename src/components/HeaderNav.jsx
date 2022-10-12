import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <div>
      <h1>Brandon&#39;s Portfolio</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">WELCOME</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default HeaderNav;
