import React, { Component } from 'react';
import router from './routes.js';
import './App.css';
import Header from './banners/Header';
import Footer from './banners/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {router}
        <Footer/>
      </div>
    );
  }
}

export default App;
