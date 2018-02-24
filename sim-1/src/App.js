import React, { Component } from 'react';
import Shelves from './components/Shelves/Shelves';
import './App.css';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className= "banner-container">
          <img src="https://raw.githubusercontent.com/Dmust32/simulation-1/master/assets/logo.png" alt=''/>
          <h1>SHELFIE</h1>
        </div>
        <Shelves />
        {routes}
      </div>
    );
  }
}

export default App;


