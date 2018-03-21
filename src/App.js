import React, { Component } from 'react';

import Header from './components/Header';
import Post from './components/Post';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
      </div>
    );
  }
}

export default App;
