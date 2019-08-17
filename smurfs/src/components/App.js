import React from "react";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <h3>Here is a list of smurfs!</h3>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

export default App;
