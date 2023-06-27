import React, {useState} from 'react'

function Localstate() {
    
    const [state, setState] = useState({age: 21})

  const ageupHandler = () =>{
    setState({...state, age: state.age+1})
  }
  const agedownHandler = () =>{
    setState({...state, age: state.age-1})
  }

  console.log(state)
  return (
    <div>
        <hr />
        Localstate
      <div>Age: <span>{state.age}</span></div>
      
      <button onClick={ageupHandler}>Age Up</button>
      <br />
      <button onClick={agedownHandler}>Age Down</button>
    </div>
  )
}

export default Localstate