import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import './style.scss';

class Select extends Component {
  renderSelect = ({ input, options, ...other }) => {
    return (
      <div className="selectField">
        <select {...input} {...other}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    )
  }

  render() {
    const { name, ...other } = this.props;

    return (
      <Field
        name={name}
        component={this.renderSelect}
        {...other}
      />
    )
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};

Select.defaultProps = {
  options: []
};

export default Select;
