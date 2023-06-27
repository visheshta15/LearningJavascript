import React, {useEffect} from 'react'

let data = 0
function UseMemoChild() {
    
    useEffect(()=>{
        ++data
    })
    
    console.log('use memo child')
  return (
    <div>
        <p>child : {data} </p>

    </div>
  )
}

export default UseMemoChild