import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { param: [
      htmlFor, labelId, label, inputId, value, callback, optionId] } = this.props;
    return (
      <label htmlFor={ htmlFor } data-testid={ labelId }>
        { label }
        <select
          value={ value }
          name={ htmlFor }
          onChange={ callback }
          data-testid={ inputId }
        >
          <option data-testid={ optionId } value="action">Ação</option>
          <option data-testid={ optionId } value="comedy">Comédia</option>
          <option data-testid={ optionId } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  param: PropTypes.arrayOf(PropTypes.any),
};

InputSelect.defaultProps = {
  param: [],
};

export default InputSelect;
