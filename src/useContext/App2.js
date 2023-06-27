import React from 'react'
import {Firstname, Lastname} from './App';
import UseContext from './UseContext';

function App2() {
  return (
    <div>
      <Firstname.Consumer>
        {(val)=><p>{val}</p>}
      </Firstname.Consumer>

      <Firstname.Consumer>
        {(val)=>{
          return (
          <Lastname.Consumer>
            {(val1)=> {
              return <p>My name is {val} {val1}</p>
            }}
          </Lastname.Consumer>
          )
        }}
      </Firstname.Consumer>

        <UseContext />
    </div>
  )
}

export default App2