import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import dogsReducer from './reducer/reducer'
import './index.css';
import App from './App';

const store = createStore(dogsReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));