import { ADD_STATE } from "./constant";

const  reducer = (state={country: ""}, action) =>{
    console.log('state', state)
    switch(action.type){
        case ADD_STATE:
            return {...state, country: action.payload}
        default:
            return state
    }
    
}

export default reducer;