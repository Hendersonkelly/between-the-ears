import { ADD_TO_CART } from "../reducers/types"





export const addToCart = (data)=>{
    
    return{
        type: ADD_TO_CART,
        recipe: data
    }
 }