import React from 'react';
import logo from './logo.svg';
import { DatePicker } from 'antd';
import './App.css';
import Nav from './Nav.js'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        Hello World
      </header>
    </div>
  );
}

export default App;