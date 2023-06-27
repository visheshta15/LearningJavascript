import React, {useEffect} from 'react'

let data = 0
function ReactMemoChild() {
    
    useEffect(()=>{
        ++data
    })
    
    console.log('use react memo child')
  return (
    <div>
        <p>child : {data} </p>

    </div>
  )
}

export default React.memo(ReactMemoChild)