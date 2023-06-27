import React from 'react'
import {connect} from 'react-redux';

function StateFromState(props) {

    console.log(props)
    console.log(props.age, props.history)
  return (
    <div>
        <hr />
        StateFromStore
        <div>Age: <span>{props.age}</span></div>
        <button onClick={props.ageupHandler}>Age Up</button>
        <br />
        <button onClick={props.agedownHandler}>Age Down</button>

        <br />
        <div>History</div>
        <div>
            <ul>
                {props.history.map((e)=>(
                    <li key={e.id} onClick={()=>props.deleteitem(e.id)}>{e.age}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        age : state.age,
        history : state.history
        
    }
}

// map our props to store and action 
const mapDispatchToProps = (dispatch) => {
    return{
        ageupHandler: ()=> dispatch({type: 'AGE_UP', payload : 1}),
        agedownHandler: ()=> dispatch({type: 'AGE_DOWN', payload : 1}),  
        deleteitem: (id)=> dispatch({type: 'AGE_DELETE', payload : id}),  
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StateFromState)