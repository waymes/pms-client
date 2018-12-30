import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import './style.scss';

const validate = value => (value ? undefined : 'Required');

const TextField = ({ name, required, ...other }) => (
  <div className="textField">
    <Field
      name={name}
      component="input"
      required={required}
      validate={required && validate}
      {...other}
    />
  </div>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool
};

TextField.defaultProps = {
  required: false
};

export default TextField;
