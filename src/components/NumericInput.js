import React, { PropTypes } from 'react';

const NumericInput = ({ index, placeholder, min, max, maxLength, validate, status }) => {
  return (
    <input
      className = { (status < 0) ? 'error' : '' }
      type = "number"
      index = { index }
      tabIndex = { 1 }
      autoFocus = { (index === 0) }
      min = { min }
      max = { max }
      placeholder = { placeholder }
      maxLength = { maxLength }
      onChange = { (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.value.length > maxLength) {
          e.target.value = e.target.value.slice(0, maxLength);
        }
        validate({ min, max, index, value: parseInt(e.target.value, 10) });
      }
      }
    />
  );
};

NumericInput.propTypes = {
  index: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  validate: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired
};

export default NumericInput;
