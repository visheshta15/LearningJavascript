import React from 'react'
import UpdatedComponent from './withCounter'

function HoverCounter(props) {
    
  return (
    <div>
        <h1>HoverCounter</h1>
        <h4 onMouseEnter={props.incrementCount} >ON Hover</h4>
        <h5>Counter Value : {props.count}</h5>
    </div>
  )
}

export default UpdatedComponent(HoverCounter)