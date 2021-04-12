import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import DogsList from './components/dogsList'
import DogDetail from './components/dogDetail'
import { filter } from './actions/addDogs'
function App(props) {
 
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={props.filter}>Filter good dogs: {props.filterOn ? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
          <DogsList filter={props.filterOn}/>
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
const mSTP = state => {
  return {
    filterOn: state.filter 
  }
}
const mDTP = dispatch => {
  return {
    filter: () => dispatch(filter())
  }
}
// export default App;
export default connect(mSTP, mDTP)(App);
