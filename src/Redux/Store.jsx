import { configureStore } from "@reduxjs/toolkit";
import { CartSlice} from "./HandleCart";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE

const store =configureStore({
    reducer:{cart : CartSlice.reducer}

})
export default store