import React,{useReducer} from "react";
import  {CartContext}  from "./CartContext";

const initialState={
    items:[],
    totalAmount:0
}
function reducer(state,action){
     if(action.type==="Add"){
         const updatedItems=state.items.concat(action.item)
         const updatedAMount=state.toatalAmount+action.item.price*action.item.amount;
         return{
            items:updatedItems,
            totalAmount:updatedAMount
         }
     }
 }
 export default function ContextProvider(props){
    const [state,dispatch]=useReducer(reducer,initialState)
    const addItemToCart=item=>{
         dispatch({type:"Add",item:item})
    }
    const RemoveItemFromCart=id=>{
        dispatch({type:"Remove",id:id})
    }
    const cartcontext={
        items:[],
        totalAmount:0,
        additem:addItemToCart,
        removeItem:RemoveItemFromCart
    }
    return(
           <CartContext.Provider value={cartcontext}>
            {props.children}
           </CartContext.Provider>
    )
}