import axios from 'axios';
 axios.defaults.baseURL = `http://localhost:5000`
 
 export const NameSet = (fname, lname, age) => async (dispatch) =>{
   
        
        const{data} =await axios.post(`/todosetname`,{fname,lname,age});
        
        dispatch({type:'Addname', payload:data});
}


export const Todogets = () => async (dispatch) =>{
   
        
        const{data} =await axios.get(`/todosetname`);
        
        dispatch({type:'Todos', payload:data});
}


export const Tododelete = (id) => async (dispatch) =>{
   
        
        const{data} =await axios.delete(`/tododelete/${id}`);
        console.log("action",id)
        dispatch({type:'Tododelete', payload:id});
}


export const dataset = (ids,fname,lname,age) => async (dispatch) =>{
   console.log("ssss",ids,fname,age)
        const{data} =await axios.put(`/todoedite`,{ids,fname,lname,age});
        dispatch({type:'Edite', payload:data});
}