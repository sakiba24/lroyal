import {configureStore} from "@reduxjs/toolkit";
import {crereducer} from "./Reducer"
const store = configureStore({
  reducer:{
    todoget : crereducer
  },
})


 export default store