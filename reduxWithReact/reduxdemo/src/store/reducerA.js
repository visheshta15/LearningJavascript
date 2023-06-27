const initialstate = {
    a: 1,
}

const reducerA = (state=initialstate, action) =>{
    switch(action.type){
        case "UPDATE_A":
            return {...state, a : state.a + action.payload}
        default:
            return {...state}
    }
}

export default reducerA;