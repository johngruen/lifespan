import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const generateGridValues = (num, max) => {
  const weekArray = [];
  for (let i = 0; i <= max; i++) {
    weekArray.push(i <= num);
  }
  return weekArray;
};

const Results = ({ birthday }) => {
  const date = new Date(birthday[2], birthday[0], birthday[1]);
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((date.getTime() - today.getTime()) / (oneDay)));
  const diffWeeks = Math.round(diffDays / 7);
  const gridValues = generateGridValues(diffWeeks, 90 * 52);

  return (
    <div className="wrapper">
    <h1>You've been alive { numberWithCommas(diffDays) } days</h1>
    <h1>...or {numberWithCommas(diffWeeks) } weeks</h1>
    <div className="weeks">
      {
        gridValues.map((val, i) => {
          if (val) {
            return (<div className="week lived" key={i}/>);
          }
          return (<div className= "week" key={i} />);
        })
      }
    </div>
    </div>
  );
};

Results.propTypes = {
  birthday: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    birthday: state.birthday
  };
};

export default connect(mapStateToProps)(Results);

