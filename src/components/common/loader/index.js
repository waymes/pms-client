import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Loader = ({ isLoading, withBlur }) => isLoading && (
  <div className="loader">
    <div className="loader__holder">
      {withBlur && <div className="loader__blur" />}
      <div className="loader__spinner" />
    </div>
  </div>
);

Loader.propTypes = {
  isLoading: PropTypes.bool,
  withBlur: PropTypes.bool
};

Loader.defaultProps = {
  isLoading: false,
  withBlur: false
};

export default Loader;
