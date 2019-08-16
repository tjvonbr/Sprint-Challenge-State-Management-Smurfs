import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

const SmurfList = props => {
  return (
    <div className="smurf-wrapper">
      {props.smurfsArr.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfsArr: state.smurfsArr,
    isLoading: state.isLoading,
    test: state.test
  }
}

export default connect(
  mapStateToProps,
  {}
)(SmurfList);