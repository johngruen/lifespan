import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BirthdayForm from './BirthdayForm';
import Results from './Results';

const App = ({ submittedBirthday }) => {
  if (submittedBirthday) {
    return (
      <div id="App" className="app">
        <Results />
      </div>
    );
  }
  return (
    <div id="App" className="app">
      <BirthdayForm />
    </div>
  );
};

App.propTypes = {
  submittedBirthday: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    submittedBirthday: state.submittedBirthday
  };
};

export default connect(mapStateToProps)(App);
