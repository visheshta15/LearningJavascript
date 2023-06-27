const initialstate = {
    age: 51,
    history : []
}


const reducer = (state=initialstate , action )=>{
    console.log(state)
    switch(action.type){
        case "AGE_UP":
            return {
                ...state , 
                age : state.age + action.payload,
                history : state.history.concat({age: state.age + action.payload, id: Math.random()})
            }
        case "AGE_DOWN":
            return {
                ...state , 
                age : state.age - action.payload,
                history : state.history.concat({age: state.age - action.payload , id: Math.random()})
            }
        case "AGE_DELETE":
            return {
                ...state , 
                history : state.history.filter((e)=> e.id !== action.payload)
            }
        default:
            return {...state}
    }
}

export default reducer;