/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// src/App.js

import React from 'react';
import HomePage from './HomePage'; // Import the HomePage component

function App() {
  return (
    <div className="App">
      <HomePage /> {/* Render the HomePage component */}
    </div>
  );
}

export default App;

