import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const Regster = createAsyncThunk(
  'posts/addPost',
  async ({fname,lname,username,password},{rejectWithValue}) => {
    try {
      const {data} = await axios.post('http://localhost:5000/regster',{fname,lname,username,password})
      console.log('data-->',data)
      return data
    } catch (error) {
      console.log('error-->',error)
      // You can choose to use the message attached to err or write a custom error
     // throw rejectWithValue(error)
        const customError = {
        
        data: error.response.data.message // serializable
      };
      throw customError;
      //return error.response.data.message
    }
  }
)

export const login = createAsyncThunk(
  'posts/login',
  async ({username,password}) => {
    try {
      const {data} = await axios.post('http://localhost:5000/login',{uaername,password})
      return data
    } catch (error) {
      // You can choose to use the message attached to err or write a custom error
      return error.message
    }
  }
)
