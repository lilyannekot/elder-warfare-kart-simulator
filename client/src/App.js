import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HPbar from './components/BattlePage/HPbar/HPbar'

function App() {
  return (
    <div className="App">
      <HPbar
        currentHP={50}
        maxHP={100}
      />
    </div>
  );
}

export default App;
