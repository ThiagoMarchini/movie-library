import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    console.log(this.props);
    const { param: [htmlFor, labelId, label, inputId, value, callback] } = this.props;
    return (
      <label htmlFor={ htmlFor } data-testid={ labelId }>
        { label }
        <input
          type="number"
          pattern="[0-9]*"
          data-testid={ inputId }
          name={ htmlFor }
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  param: PropTypes.arrayOf(PropTypes.shape({
    htmlFor: PropTypes.string,
    labelId: PropTypes.string,
    label: PropTypes.string,
    inputId: PropTypes.string,
    value: PropTypes.number,
    callback: PropTypes.func,
  })).isRequired,
};

export default InputNumber;
