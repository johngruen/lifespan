import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NumericInput from './NumericInput';
import { validateNumericInput, handleDateSubmit } from './../actions';

const BirthdayForm = (props) => {
  const { birthday, lastValidYear, currentYear, validate, submit, validBirthday } = props;
  const isValid = (testVal, str1, str2) => {
    return testVal ? `${str1} ${str2}` : `${str1}`;
  };
  return (
    <div>
    <form className="form" noValidate="true" onSubmit = { (e) => {
      e.preventDefault();
      submit();
    }}
    >
      <h1>When were you born?</h1>
      <div className="row-between-bottom">
        <div className="row-between-bottom">
          <NumericInput
            index = { 0 }
            placeholder="mm"
            min={ 1 }
            max={ 12 }
            maxLength={ 2 }
            validate={ validate }
            status={ birthday[0] }
          />
          <NumericInput
            index = { 1 }
            placeholder="dd"
            min={ 1 }
            max={ 31 }
            maxLength={ 2 }
            validate={ validate }
            status={ birthday[1] }
          />
          <NumericInput
            index = { 2 }
            alt={ birthday.year }
            placeholder="yyyy"
            min={ lastValidYear }
            max={ currentYear }
            maxLength={ 4 }
            validate={ validate }
            status={ birthday[2] }
          />
        </div>
        <button className={ isValid(validBirthday, 'button submit', 'valid') }
          onSubmit = { (e) => {
            e.preventDefault();
            submit();
          }}
          noValidate
        >Submit
        </button>
      </div>
    </form>
    </div>
  );
};

BirthdayForm.propTypes = {
  currentYear: PropTypes.number.isRequired,
  lastValidYear: PropTypes.number.isRequired,
  birthday: PropTypes.array.isRequired,
  validBirthday: PropTypes.bool.isRequired,
  validate: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentYear: state.currentYear,
    lastValidYear: state.lastValidYear,
    birthday: state.birthday,
    validBirthday: state.validBirthday
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    validate: bindActionCreators(validateNumericInput, dispatch),
    submit: bindActionCreators(handleDateSubmit, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BirthdayForm);
