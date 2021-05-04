import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    // console.log(this.props);
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
  param: PropTypes.arrayOf(PropTypes.shape({
    htmlFor: PropTypes.string,
    labelId: PropTypes.string,
    label: PropTypes.string,
    inputId: PropTypes.string,
    value: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    callback: PropTypes.func,
    optionId: PropTypes.string,
  })).isRequired,
};

export default InputSelect;
