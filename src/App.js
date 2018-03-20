import React, { Component } from 'react';
import router from './routes.js';
import './App.css';
import Header from './banners/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {router}
      </div>
    );
  }
}

export default App;
