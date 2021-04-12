import React from 'react';
import './App.css';
import DogsList from './components/dogsList'
import DogDetail from './components/dogDetail'
function App() {
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
          <DogsList />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogDetail />  
        </div>
      </div>
    </div>
  );
}

export default App;
// export default connect(mSTP)(App);
