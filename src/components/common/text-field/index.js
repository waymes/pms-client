import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import './style.scss';

const validate = value => (value ? undefined : 'Required');

const Input = ({ meta: { touched, error }, input, ...props }) => (
  <div className="textField">
    <input {...input} {...props} />
    {touched && error && <span className="textField__error">{error}</span>}
  </div>
);

const TextField = ({ name, required, ...other }) => (
  <Field
    name={name}
    component={Input}
    required={required}
    validate={required && validate}
    {...other}
  />
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool
};

TextField.defaultProps = {
  required: false
};

export default TextField;
