import {createSlice } from '@reduxjs/toolkit'
import {login} from './Api'

const initialState = {
    message:"",
    obj:{},
    error: "",
    loginAuth: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // ==> normal reducer functions go here
},
  extraReducers(builder) {
        builder
            .addCase(login.pending, (state, action) => {
                state.status = "loading"
                state.loginAuth= false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loginAuth=true
                state.obj= action.payload
            })
            .addCase(login.rejected, (state, action) => {
                
                state.error = action.error.message
                state.loginAuth= false
            })
            
    }
})

export default loginSlice.reducer;