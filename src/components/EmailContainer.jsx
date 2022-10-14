import React from 'react';
import PropTypes from 'prop-types';

function EmailContainer({ emailPath, name }) {
  return (
    <div className="email-container">
      <iframe
        src={`${process.env.PUBLIC_URL}${emailPath}`}
        height="800"
        width="600"
        title={name}
        className="email-iframe"
      />
    </div>
  );
}
EmailContainer.propTypes = {
  emailPath: PropTypes.node,
  name: PropTypes.string,
};
EmailContainer.defaultProps = {
  emailPath: '',
  name: '',
};
export default EmailContainer;
