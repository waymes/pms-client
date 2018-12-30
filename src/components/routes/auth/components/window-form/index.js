import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const WindowForm = ({ children, title, onSubmit }) => (
  <div className="windowForm">
    <h2 className="windowForm__title">{title}</h2>
    <form onSubmit={onSubmit} className="windowForm__form">
      {children}
    </form>
  </div>
);

WindowForm.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default WindowForm;
