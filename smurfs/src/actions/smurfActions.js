import axios from 'axios';

export const POSTING_SMURF_DATA_START = 'POSTING_SMURF_DATA_START';
export const POSTING_SMURF_DATA_SUCCESS = 'POSTING_SMURF_DATA_SUCCESS';
export const POSTING_SMURF_DATA_FAILURE = 'POSTING_SMURF_DATA_FAILURE';

export const registerSmurf = creds => {
  return (dispatch) => {
    dispatch({ type: POSTING_SMURF_DATA_START })
    axios
      .post('/smurfs', creds)
      .then(response => { 
        dispatch({ type: POSTING_SMURF_DATA_SUCCESS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: POSTING_SMURF_DATA_FAILURE, payload: error.response })
      })
  }
}

// dispatch({ type: ADD_SMURF, payload: newSmurf })