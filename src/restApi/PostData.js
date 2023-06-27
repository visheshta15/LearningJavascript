import axios from 'axios'
import React, {useState} from 'react'

function PostData() {
    let obj = {
        country : "", 
        population : ""
    }
    const [newData, setnewdata] = useState(obj)

    // const handlePostReq = () =>{
    //     if(newData.country && newData.population){
    //         console.log(newData)
    //         axios.post('https://retoolapi.dev/q4WXky/countrydata', newData)
    //         .then((res) => console.log(res))
    //         .catch((err)=> console.log(err))
    //     }
    // }
    const handlePostReq = async () =>{
        // if(newData.country && newData.population){
            console.log(newData)
            await axios.post('https://retoolapi.dev/q4WXky/countrydata/1', {country : "apple"})
            .then((res) => console.log(res))
            .catch((err)=> console.log(err))
        // }
    }

    
  return (
    <div>
        <h3>PostData</h3>
        <input type="text" placeholder='enter country name' onChange={(e)=>setnewdata({...newData, country : e.target.value})}/>
        <input type="text" placeholder='population' onChange={(e)=>setnewdata({...newData, population : e.target.value})}/>
        <button onClick={handlePostReq}>add country</button>
    </div>
  )
}

export default PostData