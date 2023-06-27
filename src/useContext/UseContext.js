import React, {useContext} from 'react'
import {Firstname, Lastname} from './App'

function UseContext() {
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
  return (
    <div>UseContext
        <h6>Myself {fname} {lname}</h6>
    </div>

  )
}

export default UseContext