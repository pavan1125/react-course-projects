import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Ui-store";
import CartSlice from "./Cart-slice";
const store=configureStore({
    reducer:{ui:UiSlice.reducer,cart:CartSlice.reducer}
})

export default store;