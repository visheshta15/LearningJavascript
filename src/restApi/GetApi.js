import React, {useState} from 'react'
import axios from 'axios'

function GetApi() {

    const [getCountrydata, setCountryData]  = useState([])

  // const handleGetData = () =>{
  //   axios.get('https://retoolapi.dev/q4WXky/countrydata')
  //   .then((res)=> setCountryData(res.data))
  //   .catch((err)=> console.log(err))
  // }

  // const handleGetData = () =>{
  //   axios.get('https://retoolapi.dev/q4WXky/countrydata?_page=2&_limit=10')
  //   .then((res)=> setCountryData(res.data))
  //   .catch((err)=> console.log(err))
  // }
  const handleGetData = () =>{
    axios.get("https://retoolapi.dev/q4WXky/countrydata/1")
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
  }


  return (
    <div>
        <h3>GetApi</h3>
        <button onClick={handleGetData}>Get Data</button>
        <ul>
            {getCountrydata.map((ele)=>
                <li>{ele.id} --  {ele.country}</li>
            )}
        </ul>
    </div>
  )
}

export default GetApi