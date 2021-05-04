import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { param: [htmlFor, labelId, label, inputId, value, callback] } = this.props;
    return (
      <label htmlFor={ htmlFor } data-testid={ labelId }>
        { label }
        <input
          type="number"
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
  param: PropTypes.arrayOf(PropTypes.any),
};

InputNumber.defaultProps = {
  param: [],
};

export default InputNumber;
