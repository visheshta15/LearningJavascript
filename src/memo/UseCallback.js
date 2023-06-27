import React, {useState, useCallback} from 'react'
import UseCallbackChild from './UseCallbackChild';

// One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
export default function UseCallback() {
    const [toggle , setToggle] = useState(false);
    const [data, setData] = useState("this is data")

    // const returncomment = () =>{
    //     return data
    // }

    const returncomment = useCallback(
    (name) =>{
        return data + name
    },
    [data]
    )


  return (
    <div>
    <hr />
      <h6>useCallback : Hook returns a memoized callback function.</h6>
        <UseCallbackChild returncomment={returncomment} />
        <button onClick={()=> setToggle(!toggle)}>Toggle</button>
        {toggle && <h6>toggle</h6>}
    </div>
  )
}














// function UseCallback() {
//     const [t, setn] = useState(0);
//     const [dark, setdark] = useState(false);
   
//     const doubleFunctin = slowFunction(n)
//     console.log(doubleFunctin);
//     const  themeStyle = {
//         backgroundColor : dark ? 'black' : "grey",
//         color : dark? "pink" : 'black'
//     }
//   return (
//     <div>
//         <hr />
//         <input type="text" value={n} onChange={e => setImmediate(parseInt(e.target.value))}/>
//         <button onClick={()=> setdark(prevDark => !prevDark)}>change theme</button>
//         <div style={themeStyle}>{doubleFunctin}</div>

//     </div>
//   )
// }

// const slowFunction = (num) => {
//     console.log('calling slow function,', num);
//     for(let i=0; i<=1000000000; i++){}
    
    
// }

// export default UseCallback


