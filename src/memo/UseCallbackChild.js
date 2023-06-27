import React, {useEffect} from 'react'

function UseCallbackChild({returncomment}) {
    useEffect(()=>{
        console.log('function was called ');
    },[returncomment])
  return (
    <div>
        {returncomment('vish')}
    </div>
  )
}

export default UseCallbackChild