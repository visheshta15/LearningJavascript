import React, {useState} from 'react'
import UpdatedComponent from './withCounter'
function ClickCounter(props) {

    
  return (
    <div>
        <h1>ClickCounter</h1>
        <button onClick={props.incrementCount}>Button Click</button>
        <h5>Counter Value : {props.count}</h5>
        <h5>Name : {props.name}</h5>
    </div>
  )
}

export default UpdatedComponent(ClickCounter)