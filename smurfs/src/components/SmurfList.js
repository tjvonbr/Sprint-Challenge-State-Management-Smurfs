import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { Loader } from 'react-loader-spinner';

import { fetchSmurfs } from '../actions/smurfActions';

const SmurfList = props => {
  return (
    <div className="smurf-wrapper">
      <button className="btn fetch-btn"
              onClick={ props.fetchSmurfs}
      >
        {props.isLoading ? 
          <Loader
            type="watch"
            color="#00BFFF"
            height="25"
            width="25"
          /> :
          "Fetch the smurfs!"}
      </button>        
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
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfList);