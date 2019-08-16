import { 
  FETCH_SMURF_DATA_START,
  POSTING_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_SUCCESS } from '../actions/smurfActions';

const initialState = {
  smurfsArr: [
    {
      name: 'Brainey',
      age: 200,
      height: '5cm',
      id: Date.now()
    }
  ],

  isLoading: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfsArr: action.payload,
        isLoading: false
      }
    case POSTING_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfsArr: action.payload
      }
    default:
      return state;
  }
}