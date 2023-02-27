import {createSlice } from '@reduxjs/toolkit'
import {Regster} from './Api'

const initialState = {
    message:"",
    error: ""
}

const regsterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // ==> normal reducer functions go here
},
  extraReducers(builder) {
        builder
            .addCase(Regster.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(Regster.fulfilled, (state, action) => {
              
                state.message= action.payload
            })
            .addCase(Regster.rejected, (state, {error}) => {
                console.log('xxx',error)
                state.error = action.error.message
            })
            
    }
})


export default regsterSlice.reducer;
















 /*
const data = JSON.parse(localStorage.getItem('order'))
const init = data ? data : []

export const tasksSlice  = createSlice({
    name: 'tasks',
    initialState:init,
    
    reducers:{
        
        addTask: (state, action)=>{
            //state.order = action.payload
            const newTask = {
                id: Date.now(),
                prosess_order: action.payload.order,
                beyername:action.payload.bayer,
                ITEM: [],
            
            }
            const data = state.find((val)=>val.prosess_order == action.payload.order)
            if(!data){
                state.push(newTask)
            }
            
            
            localStorage.setItem('order', JSON.stringify(state));
          //JSON.stringify(localStorage.setItem('order'[20,30,40])) 
    },
    deletereducer:(state, action)=>{
      const data = state.filter((vals)=>vals.id !== action.payload)
       
    localStorage.setItem('order', JSON.stringify(data));
    
    return data
    },
    additem: (state, action)=>{
      console.log(action)
      let datafind = state.find((val)=>val.id == action.payload.id)
      datafind.ITEM.push(action.payload)
      localStorage.setItem('order', JSON.stringify(state));
    }
    
}

})

export const {addTask,deletereducer,additem} = tasksSlice.actions;

export default tasksSlice.reducer;
























import {createReducer, current} from "@reduxjs/toolkit"



const int = {
    todo:[]
}

export const crereducer = createReducer({int},{
    Todos: (state, action)=>{
      state.todo = action.payload
    },
    Addname: (state, action)=>{
     state.todo.push(action.payload)
    },
Tododelete : (state, action) =>{
  state.todo = state.todo.filter((val)=>val._id !== action.payload)
},

 Edite: (state, action) =>{
  state.todo = state.todo.map((val)=>(
    val._id == action.payload._id ? action.payload : val
    ))
    
}
    
})





import {createReducer, current} from "@reduxjs/toolkit"

const int ={
  todo:[]
}
console.log(int.todo)
export const TestTodo = createReducer({int},{
    dataadd: (state, action)=>{
console.log("reducersssss",action.payload)
state.todo.push(action.payload)
    },
    dataset: (state, action)=>{
        
state.todo.push(action.payload)
    }
})


const int = {
    gamedata:[]
}

export const crereducer = createReducer({int},{
    data: (state, action)=>{

state.gamedata=action.payload
    },
    getdelete: (state, action)=>{
        
state.dataget=state.dataget.filter((val)=>val._id !== action.payload )
    },
    gettest: (state, action)=>{
        
state.dataget.push(action.payload)
    },
    getedit: (state, action)=>{
        
       const data= state.dataget.map((val)=> val._id === action.payload._id ?
       action.payload : val)
        state.dataget= data
    },
    likess: (state, action)=>{
        
        const {id, i} =action.payload
      const ok = state.dataget.find((val)=>val._id ===id)
       if(ok.like.includes(i)){
         ok.like.splice(ok.like.indexOf(i), 1)
       }else{
        ok.like.push(i)
       }
       
     }
})

*/
