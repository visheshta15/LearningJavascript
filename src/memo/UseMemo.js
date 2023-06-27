import React, {useState, useMemo} from 'react'
import UseMemoChild from './UseMemoChild';

function UseMemo() {
    const [i, seti] = useState(0);
    const handleInc = () =>{
        seti(i +1)
    }
    
    const memochild = useMemo(()=>{
        return <UseMemoChild />
    }, [])
    // const memochild = useMemo(()=>{
    //     return <UseMemoChild />
    // }, [i])

  return (
    <div>
        <header>
            <hr />
            <h6>UseMemo  : useMemo Hook returns a memoized value.</h6>
            <p>{`i : ${i}`}</p>
            <button onClick={handleInc}>Increment i</button>
            {/* <UseMemoChild /> */}

            <h6>memo render</h6>
            {memochild}
        </header>
    </div>
  )
}

export default UseMemo