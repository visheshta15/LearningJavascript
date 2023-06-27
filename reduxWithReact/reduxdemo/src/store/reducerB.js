const initialstate = {
    b: 11,
}

const reducerB = (state=initialstate, action) =>{
    switch(action.type){
        case "UPDATE_A":
            return {...state, b : state.b+ action.payload}
        default:
            return {...state}
    }
}

export default reducerB;