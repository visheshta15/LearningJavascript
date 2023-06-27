import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// allow us to inject global store
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import reducer from './store/reducer';
import combinereducer from './store/combineReducer';
import reducerA from './store/reducerA';
import reducerB from './store/reducerB';


const rootReducer = combineReducers({
  rA : reducerA,
  rB : reducerB,
})

// const store  = createStore(reducer);
// const store  = createStore(combinereducer);
const store  = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
