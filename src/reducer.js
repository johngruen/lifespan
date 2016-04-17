const today = new Date();
const year = today.getFullYear();
const validate = require('vali-date');

const INITIAL_STATE = {
  submittedBirthday: false,
  validBirthday: false,
  currentYear: year,
  lastValidYear: year - 120,
  birthday: [0, 0, 0]
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'HANDLE_DATE_VALIDATION': {
      const { min, max, value, index } = action.param;
      const _birthday = state.birthday.map((val, i) => {
        if (i === index) {
          if (value <= max && value >= min) {
            if (i === 0) {
              return value - 1;
            }
            return value;
          }
          return -1;
        }
        return val;
      });
      let _validBirthday = false;
      if (_birthday.indexOf(0) === -1 && _birthday.indexOf(-1) === -1) {
        _validBirthday = validate(`${_birthday[2]}-${_birthday[0]}-${_birthday[1]}`);
      }
      return Object.assign({}, state, { birthday: _birthday, validBirthday: _validBirthday });
    }

    case 'DATE_SUBMITTED': {
      if (state.validBirthday) {
        return Object.assign({}, state, { submittedBirthday: true });
      }
      return state;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
