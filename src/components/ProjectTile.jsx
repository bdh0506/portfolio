import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectTile({ logoURL, path }) {
  console.log(logoURL);
  return (
    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 py-4 d-flex justify-content-center">
      <Link tabIndex="-1" to={`/dev-portfolio/${path}`}>
        <button type="button" className="tile-container">
          <img src={logoURL} alt={path} />
        </button>
      </Link>
    </div>
  );
}
ProjectTile.propTypes = {
  logoURL: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ProjectTile;
