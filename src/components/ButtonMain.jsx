import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
function ButtonMain({ text, icon, dl, path }) {
  return (
    <a
      tabIndex="0"
      href={path}
      download={dl}
      className="btn btn-main px-4 py-2"
    >
      {text}
      {icon}
    </a>
  );
}

ButtonMain.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.element,
  dl: PropTypes.string,
};
ButtonMain.defaultProps = {
  icon: '',
  dl: '',
};

export default ButtonMain;
