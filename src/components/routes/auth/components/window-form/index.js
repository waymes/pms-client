import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../../../common/loader';
import './style.scss';

const WindowForm = ({ children, title, onSubmit, isLoading }) => (
  <div className="windowForm">
    <h2 className="windowForm__title">{title}</h2>
    <form onSubmit={onSubmit} className="windowForm__form">
      {children}
    </form>
    <Loader isLoading={isLoading} withBlur />
  </div>
);

WindowForm.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

WindowForm.defaultProps = {
  isLoading: false
};

export default WindowForm;
