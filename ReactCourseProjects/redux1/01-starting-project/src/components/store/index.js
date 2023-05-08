
import { createSlice,configureStore } from "@reduxjs/toolkit"


const initialCounterState={counter:0,toggle:true}
const initialAuthState={isAuthenticated:false}
const counterSlice=createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
         increment(state){
            state.counter++
         },
         decrement(state){
            state.counter--
         },
         increase(state,action){
            state.counter=state.counter+action.payload
         },
         toogler(state){
            state.toggle=!state.toggle
         }
    }
})
const authSlice=createSlice({
     name:"auth",
     initialState:initialAuthState,
     reducers:{
        login(state){
            state.isAuthenticated=true
        },
        logout(state){
            state.isAuthenticated=false
        }
     }
})

const store=configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
})
export const authActions=authSlice.actions
export const counterAction =counterSlice.actions
export default store