import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
         items:[],
         totalItems:0,
         totalPrice:0
    },
    reducers:{
         AddToCart(state,action){
             const newItem=action.payload
             const ExisitingItem=state.items.find((item)=>item.id===newItem.id)
             state.totalItems++
             state.totalPrice =state.totalPrice+newItem.price
             if(!ExisitingItem){
                 state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    totalPrice:newItem.price,
                    title:newItem.title,
                    Quantity:1
                 })
                 
                }else{
                    ExisitingItem.Quantity++
                    ExisitingItem.totalPrice=ExisitingItem.totalPrice+newItem.price
                }
         },
         RemoveFromCart(state,action){
                state.totalItems--
               let id=action.payload
               let ExisitingItem=state.items.find(item=>item.id===id)
               state.totalPrice =state.totalPrice-ExisitingItem.price
               if(ExisitingItem.Quantity===1){
                  state.items=state.items.filter((item)=>item.id!==id)
               }
               else{
                  ExisitingItem.Quantity--
               }
         }
    }
})

export const CartActions=CartSlice.actions
export default CartSlice