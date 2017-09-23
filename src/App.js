import React, { Component } from 'react';
import {Header} from './components/Header.js';
import {TextWindow} from './components/TextWindow.js';
import {ScrollBar} from './components/ScrollBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TextWindow />
        <ScrollBar />
      </div>
    );
  }
}

export default App;
