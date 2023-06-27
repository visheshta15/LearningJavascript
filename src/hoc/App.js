import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

// a pattern where a function takes a component as an argument and returns a new component.


function App() {
    (function(){
        var a = b = 10
    })()

    console.log(b);
  return (
    <div>
        <ClickCounter />
        <hr />
        <HoverCounter />
    </div>
  )
}

export default App