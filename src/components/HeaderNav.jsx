import React from 'react';

function HeaderNav() {
  return (
    <nav className="navbar">
      <h1>Portfolio</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}

export default HeaderNav;
