import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { param: [htmlFor, labelId, label, inputId, value, callback] } = this.props;
    return (
      <label htmlFor={ htmlFor } data-testid={ labelId }>
        { label }
        <input
          type="text"
          data-testid={ inputId }
          name={ htmlFor }
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  param: PropTypes.arrayOf(PropTypes.any),
};

InputText.defaultProps = {
  param: [],
};

export default InputText;
