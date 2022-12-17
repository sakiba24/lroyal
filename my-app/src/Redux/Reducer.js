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




/*
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
