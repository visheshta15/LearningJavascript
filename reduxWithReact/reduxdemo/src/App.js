import React from 'react'
import Localstate from './component/Localstate'
import StateFromCombineReducer from './component/StateFromCombineReducer'
import StateFromState from './component/StateFromState'
// import StoreState from './component/StoreState'

function App() {



  return (
    <div>
      App
      <Localstate />
      {/* <StateFromState /> */}
      <StateFromCombineReducer />
    </div>
  )
}

export default App