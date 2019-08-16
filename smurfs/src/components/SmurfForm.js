import React, { useState } from 'react';
import { connect } from 'react-redux';

import { registerSmurf } from '../actions/smurfActions';

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

  const handleChanges = event => {
    setNewSmurf(event.target.value)
  };

  return (
    <div className="form-wrapper">
      <form action="submit">
        <input className="form-input"
          placeholder="Please enter your name."
          type="text"
          value={ newSmurf.name }
          name="value"
          onChange={ handleChanges }
        />
        <input className="form-input"
          placeholder="Please enter your age."
          type="text"
          value={ newSmurf.age }
          name="value"
          onChange={ handleChanges }
        />
        <input className="form-input"
          placeholder="Please enter your height in centimeters."
          type="text"
          value={ newSmurf.height }
          name="value"
          onChange={ handleChanges }
        />
        <button className="btn submit-btn"
                onClick={ props.registerSmurf }>
                  Submit Form
        </button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { registerSmurf }
)(SmurfForm);