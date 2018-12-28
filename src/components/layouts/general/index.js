import React from 'react';
import PropTypes from 'prop-types';

const GeneralLayout = ({ children }) => (
  <div>
    header
    {children}
  </div>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default GeneralLayout;
