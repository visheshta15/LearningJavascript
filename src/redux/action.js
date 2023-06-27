import { ADD_STATE } from "./constant";

const addCountryAction = (country) =>{
    // console.log(country)
    return{
        type : ADD_STATE,
        payload : country
    }
}

export default addCountryAction;
