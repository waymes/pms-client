import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import './style.scss';

const GeneralLayout = ({ children }) => (
  <div className="generalLayout">
    <Header />
    <div className="generalLayout__pageContainer">
      {children}
    </div>
  </div>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default GeneralLayout;
