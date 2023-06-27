import React from 'react'
import Normal from './Normal'
import ReactMemo from './ReactMemo'
import UseCallback from './UseCallback'
import UseMemo from './UseMemo'

function App() {
  return (
    <div>
        memo
        <Normal />
        <UseMemo />
        <ReactMemo />
        <UseCallback/>
    </div>
  )
}

export default App