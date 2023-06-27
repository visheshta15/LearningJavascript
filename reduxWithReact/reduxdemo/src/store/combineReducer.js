const initialstate = {
    a: 1,
    b: 51
}

const combinereducer = (state=initialstate, action) =>{
    switch(action.type){
        case "UPDATE_A":
            return {...state, a : state.a+1}
        case "UPDATE_B":
            return {...state, b : state.b+1}
        default:
            return {...state}
    }
}

export default combinereducer;