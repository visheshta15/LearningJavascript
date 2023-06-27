import React from 'react'
import {connect} from 'react-redux';

function StateFromCombineReducer(props) {

    console.log(props)
    console.log(props.a, props.b)
    return (
    <div>
        <hr />
        StateFromCombineReducer
        <div>
            {/* <div>
                <div>A : {props.a}</div>
                <button onClick={props.updateA}>Update A</button>
            </div>
            <div>
                <div>B : {props.b}</div>
                <button onClick={props.updateB}>Update B</button>
            </div> */}
            <div>
                <div>A : {props.a}</div>
                <button onClick={() => props.updateA(props.b)}>Update A</button>
            </div>
            <div>
                <div>B : {props.b}</div>
                <button onClick={() => props.updateB(props.a)}>Update B</button>
            </div>
        </div>
    </div>
    )
}


// const mapStateToProps = (state) =>{
//     return{
//         a : state.a,
//         b : state.b
        
//     }
// }
const mapStateToProps = (state) =>{
    return{
        a : state.rA.a,
        b : state.rB.b
        
    }
}
// map our props to store and action 
// const mapDispatchToProps = (dispatch) => {
//     return{
//         updateA: ()=> dispatch({type: 'UPDATE_A', payload : 1}),
//         updateB: ()=> dispatch({type: 'UPDATE_B', payload : 1}),  
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return{
        updateA: (b)=> dispatch({type: 'UPDATE_A', payload : b}),
        updateB: (a)=> dispatch({type: 'UPDATE_B', payload : a}),  
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StateFromCombineReducer)