import axios from 'axios';

export const POSTING_SMURF_DATA_START = 'POSTING_SMURF_DATA_START';
export const POSTING_SMURF_DATA_SUCCESS = 'POSTING_SMURF_DATA_SUCCESS';
export const POSTING_SMURF_DATA_FAILURE = 'POSTING_SMURF_DATA_FAILURE';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURF_DATA_START })
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: error.response })
      })
  }
}

export const registerSmurf = creds => {
  return (dispatch) => {
    dispatch({ type: POSTING_SMURF_DATA_START })
    axios
      .post('http://localhost:3333/smurfs', creds)
      .then(response => { 
        console.log('Response', response.data)
        dispatch({ type: POSTING_SMURF_DATA_SUCCESS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: POSTING_SMURF_DATA_FAILURE, payload: error.response })
      })
  }
}

// dispatch({ type: ADD_SMURF, payload: newSmurf })