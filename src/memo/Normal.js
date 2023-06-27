import React, {useState} from 'react'
import UseMemoChild from './UseMemoChild';

function Normal() {
    const [i, seti] = useState(0);
    const handleInc = () =>{
        seti(i +1)
    }

  return (
    <div>
        <header>
            <hr />
            <h6>Normal</h6>
            <p>{`i : ${i}`}</p>
            <button onClick={handleInc}>Increment i</button>

            <p>normal render</p>
            <UseMemoChild />
        </header>
    </div>
  )
}

export default Normal