import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/portfolio">Go Home</Link>
    </div>
  );
}

export default Error404;
