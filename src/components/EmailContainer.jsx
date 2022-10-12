import React from 'react';
import PropTypes from 'prop-types';

function EmailContainer({ content }) {
  console.log(`emailContainer ${content}`);
  return (
    <div className="email-container">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
EmailContainer.propTypes = {
  content: PropTypes.node,
};
EmailContainer.defaultProps = {
  content: '',
};
export default EmailContainer;
