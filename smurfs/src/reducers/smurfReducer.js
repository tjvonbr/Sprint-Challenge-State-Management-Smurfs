import { POSTING_SMURF_DATA_SUCCESS } from '../actions/smurfActions';

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
    case POSTING_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfsArr: [...state.smurfsArr, {item: action.payload, age: action.payload, height: action.payload }]
      }
    default:
      return state;
  }
}