import {configureStore} from '@reduxjs/toolkit'
import regsterSlice  from './Reducer'

const store = configureStore({
    reducer:{
       posts: regsterSlice
    }
})

export default store