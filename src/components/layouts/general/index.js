import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';

const GeneralLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default GeneralLayout;
