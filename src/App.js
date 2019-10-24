import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReduxDemo from './components/ReduxDemo';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <h2>Welcome to React</h2>     
      </header>
      <ReduxDemo />
      {/* <Home /> */}
    </div>
  );
}

export default App;
