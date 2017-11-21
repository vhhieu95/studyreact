import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="App-title">Coutdown to December 25, 2017</div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">22 hours</div>
          <div className="Clock-minutes">20 minutes</div>
          <div className="Clock-seconds">50 seconds</div>
        </div>
        <div>
          <input placeholder='new date'/>
          <button>Submit</button>
        </div>
      </div>
    )
        
  }
}

export default App;