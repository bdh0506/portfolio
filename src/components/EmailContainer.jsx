import React from 'react';
import PropTypes from 'prop-types';

function EmailContainer({ emailPath, name }) {
  return (
    <div className="col-xxl-6 col-xl-12 py-4">
      <div className="email-container mx-auto">
        <iframe
          src={`${process.env.PUBLIC_URL}${emailPath}`}
          height="800"
          width="667"
          title={name}
          className="email-iframe"
        />
      </div>
    </div>
  );
}
EmailContainer.propTypes = {
  emailPath: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default EmailContainer;
