import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import './style.scss';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  focusInput() {
    if (this.input.current) {
      this.input.current.focus();
    }
  }

  validate = (value) => {
    return (value && value.trim()) ? undefined : 'Required';
  }

  renderInput = ({ meta: { touched, error }, input, ...props }) => (
    <div className="textField">
      <input {...input} {...props} ref={this.input} />
      {touched && error && <span className="textField__error">{error}</span>}
    </div>
  );
 
  render() {
    const { name, autoComplete, required, ...other } = this.props;

    return (
      <Field
        name={name}
        component={this.renderInput}
        required={required}
        validate={required && this.validate}
        autoComplete={autoComplete || name}
        {...other}
      />
    );
  }
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
};

TextField.defaultProps = {
  required: false,
  autoComplete: ''
};

export default TextField;
