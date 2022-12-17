import {useState} from "react"
import './Name.css'
import {NameSet} from "../Redux/Action"
import {useDispatch } from "react-redux"
import Todoget from "./Todoget"

const AddName = () =>{
  const dispatch = useDispatch()
  
  const [fname, setfname]= useState("")
  const [lname, setlname]= useState("")
  const [age, setage]= useState("")
  
  
  const sendData = (e) =>{
 e.preventDefault()
 dispatch(NameSet(fname, lname, age))
  setfname("")
  setlname("")
  setage("")
    
  }
  
  
  return (
    <div>
    
    <input className="in" type="text" placeholder='Enter you fast name?'  
      value={fname} onChange={(e) =>setfname(e.target.value)}
     /> 
     <br />
       <input type="text" placeholder='Enter you last name?'  
      value={lname} onChange={(e) =>setlname(e.target.value)}
     /> 
    <br />
    
      <input type="text" placeholder='Enter you age?'  
      value={age} onChange={(e)=>setage(e.target.value)}
     /> 
     <br />
     <button onClick={sendData} >submit </button>
    <br /> 
    
    
    <Todoget />
    </div>
    
    )
  
  
}

export default AddName