import React, { useState } from 'react';
import { connect } from 'react-redux';

import { registerSmurf } from '../actions/smurfActions';

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

  const handleChanges = event => {
    setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newSmurf)
    props.registerSmurf(newSmurf)
  }

  return (
    <div className="form-wrapper">
      <form action="submit"
            onSubmit={ handleSubmit }>
        <input className="form-input"
          placeholder="Please enter your name."
          type="text"
          value={ newSmurf.name }
          name="name"
          onChange={ handleChanges }
        />
        <input className="form-input"
          placeholder="Please enter your age."
          type="text"
          value={ newSmurf.age }
          name="age"
          onChange={ handleChanges }
        />
        <input className="form-input"
          placeholder="Please enter your height in centimeters."
          type="text"
          value={ newSmurf.height }
          name="height"
          onChange={ handleChanges }
        />
        <button className="btn submit-btn">
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