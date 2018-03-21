import React, { Component } from 'react';
import router from './routes.js';
import './App.css';
import Header from './banners/Header';
import Footer from './banners/Footer';


class App extends Component {
  render() {
    return (
      <div className="App Site">
        <Header/>
          <div className="Site-content">
             {router}
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
