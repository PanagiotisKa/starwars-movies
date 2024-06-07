import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';

function App() {
  console.log(process.env.REACT_APP_API_ENDPOINT)
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
