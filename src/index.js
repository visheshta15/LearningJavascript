import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './lifecycle/AppCC'
// import App from './lifecycle/AppFC';
// import App from './useContext/App'
// import App  from './memo/App'
// import App from './questions/App'
// import App from './testing/App'
// import App from './restApi/App'
// import App from './hoc/App'
import App from './pureComponent/App'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './redux/store'

// store.subscribe(()=> console.log(store.getState()))

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
