import React from 'react';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_API_ENDPOINT)
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;