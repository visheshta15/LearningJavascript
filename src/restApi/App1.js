import React, {useState} from 'react';

const App1 = ()=>{
 
  let date3 = new Date().toLocaleTimeString()
  const [autoTime, setAutoTime] = useState(1)

  const callTimeF =()=>{
    // let date4= new Date()
    // console.log(date4)
    // setAutoTime(date4)
    setAutoTime(autoTime +1)
  }

  setInterval(
    //function, time
    callTimeF, 1000
  )

  return(
    <>
      <h1>{autoTime}</h1>
    </>
  )
  }

export default App1;