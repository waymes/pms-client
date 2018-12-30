import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Button = ({
  children, className, type, ...other
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`button ${className}`} type={type} {...other}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  className: '',
  type: 'button'
};

export default Button;
