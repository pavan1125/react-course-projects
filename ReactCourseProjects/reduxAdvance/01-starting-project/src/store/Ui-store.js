import {createSlice} from "@reduxjs/toolkit"


const UiSlice=createSlice({
    name:"ui",
    initialState:{isToggled:false},
    reducers:{
         ToggleCart(state){
            state.isToggled=!state.isToggled;
         }
    }
})

export const UiActions=UiSlice.actions
export default UiSlice