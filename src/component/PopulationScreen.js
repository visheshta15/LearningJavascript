import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { Modal, Tooltip} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from 'react-redux';
import addCountryAction from '../redux/action';

function PopulationScreen() {
    const selectinput = useRef('')
    const [open, setOpen] = useState(false);
    const [selectCountry, setselectCountry] = useState("");
    const [ddCountry, setddCountry] = useState("");
    const dispatch = useDispatch()

    const [countriesData, setcountriesData] = useState([])
    useEffect(()=>{
        axios.get('/countryData.json')
        .then((res)=>{
            console.log(res.data);
            setcountriesData(res.data)
          }).catch((err)=>{
            console.log(err);
          })

    },[])

    useEffect(()=>{
        console.log('dispatch action')
        dispatch(addCountryAction(selectCountry))
    }, [selectCountry, dispatch])
    
    const updateTodo =()=>{
        //update the todo with the new input text
        setOpen(false)
    }

    const selectCountryHandler = () =>{
        console.log(selectinput.current.value)
        setddCountry(selectinput.current.value)
        // setOpen(true)
    }

    const submithandler = (e) =>{
        e.preventDefault()
        setselectCountry(ddCountry)
        setOpen(true)
        dispatch(addCountryAction(selectCountry))
    }


  return <>
    <Modal
        open={open}
        onClose={e=> setOpen(false)}
    >
        <div className="todo__modal">
            <div>
                <h3>{selectCountry}</h3>
                <Tooltip title="close" ><CloseIcon onClick={updateTodo} /></Tooltip>
                
            </div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

        </div>
    </Modal>


    
    <div className='pcount'>
      <div className='pcount_header'>
          <h4>Population Count</h4>
          <div>
                <form onSubmit={submithandler}>
                    Search By 
                    <input  list="datalistOptions" id="exampleDataList" placeholder="Country Name"  ref={selectinput} onChange={selectCountryHandler} value={ddCountry}/>
                    <datalist id="datalistOptions" >
                        {countriesData.map((country)=> (
                            <div key={country.country}>
                                <option value={country.country}/>
                            </div>
                        ))}
                    
                    </datalist>
                </form>
              
          </div>
      </div>
      <div className='pcount_body container-fluid'>
      
            <div className="row">
                {countriesData.map((country)=>(
                    <div key={country.country} className='countryCard  col-12 col-sm-1 ' onClick={e => {
                        setOpen(true) ;
                        setselectCountry(country.country)
                    }}>
                        <div className='card_topic'>{country.country}</div>
                        <div className='card_body'>
                            Population Count: <br />
                            {country.population}

                        </div>
                    </div>
                ))}
            </div>  
      </div>
    </div>
  </>;
}

export default PopulationScreen;
