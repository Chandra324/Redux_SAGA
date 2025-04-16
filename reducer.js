
import {ADD_TO_CART} from "./constant"
export const cartData=(data=[],action)=>{
 
 if(action==="ADD_TO_CART"){
    console.warn("ADD_TO_CART",action);
    return data
 }
 else   {
    return"no action called"
 }
 return 100
}