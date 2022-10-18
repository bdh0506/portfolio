import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectTile({ logoURL, path, icon }) {
  let tile = '';
  if (icon) {
    tile = (
      <Link tabIndex="-1" to={`/dev-portfolio/${path}`}>
        <button type="button" className="tile-container icon">
          {icon}
        </button>
      </Link>
    );
  } else {
    tile = (
      <Link tabIndex="-1" to={`/dev-portfolio/${path}`}>
        <button type="button" className="tile-container">
          <img src={logoURL} alt={path} />
        </button>
      </Link>
    );
  }
  return (
    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 py-4 d-flex justify-content-center">
      {tile}
    </div>
  );
}
ProjectTile.propTypes = {
  path: PropTypes.string.isRequired,
  logoURL: PropTypes.string,
  icon: PropTypes.node,
};

ProjectTile.defaultProps = {
  icon: false,
  logoURL: '',
};

export default ProjectTile;
