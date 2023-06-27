import React,{useState} from 'react'
import ReactMemoChild from './ReactMemoChild'

function ReactMemo() {

    const [i, seti] = useState(0);
    const handleInc = () =>{
        seti(i +1)
    }

  return (
    <div>
    <header>
        <hr />
        <h6>ReactMemo</h6>
        <p>{`i : ${i}`}</p>
        <button onClick={handleInc}>Increment i</button>

        <p>ReactMemo render</p>
        <ReactMemoChild />
    </header> 
    </div>
  )
}

export default ReactMemo