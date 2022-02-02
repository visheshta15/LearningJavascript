import React from 'react';
import PopulationScreen from './component/PopulationScreen';
import logo from './image/logo.png'
import './App.css'

function App() {
  return <div className='app'>
    <div className='app_header'>
      <img src={logo} alt="" />
      <h4>World <br /> Population</h4>
    </div>
    <PopulationScreen />
  </div>;
}

export default App;
