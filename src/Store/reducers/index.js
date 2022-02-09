
import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from '../actions/types'

export default function cartReducer(state,action){
    switch(action.type){
        case ADD_TO_CART:{var condition=false
            var newState={};
            state.forEach((element,index) => {
                if(element.product.id==action.productInfo.id){console.log(1);
                    const updateditem={product:element.product,quantity:parseInt(element.quantity)+parseInt(action.quantity)}
                    newState=[...state]
                    newState[index]=updateditem
                    condition=true
                    
                }
            });
            if(!condition){
                return[
                ...state,{product:action.productInfo,quantity:action.quantity}]
                }
            else{
                return newState
            }
            
        }
        case REMOVE_FROM_CART:{
            const newState=[...state]
            
            newState.pop(action.index)
            
            return newState
        }
        case CLEAR_CART:{
            const newState=[...state]
            newState=[]
            return newState
        }
        default:{
            if(state==undefined){
                return []
            }
            return state}
    }
}