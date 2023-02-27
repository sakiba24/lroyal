import {useEffect, useState} from "react"
import {Todogets, Tododelete} from "../Redux/Action"
import {useSelector,useDispatch } from "react-redux"
import From from "./Edite"

const Todoget = () => {
  const dispatch = useDispatch()
  const {todo} = useSelector(state=>state.todoget)
  
  
  useEffect(()=>{
    dispatch(Todogets())
  },[dispatch])
  
  
  const [open, setOpen] = useState(false);
const [vals, setval] = useState({
  id:"",
  fname:"",
  lname:"",
  age:""
})
const [id,setid] = useState('')
  const handleClose = () => {
    setOpen(false);
  };
  
  
  const deletename = (id) =>{
    dispatch(Tododelete(id))
  }
  
  const edite = (val) =>{
    setOpen(true)
    setval(pre =>({...pre,
      id:val._id,
      fname: val.fname,
      lname: val.lname,
      age: val.age
    
      
    }))
    setid(val._id)
  }
  
  return( <div> <table class="styled-table">
    <thead>
        <tr>
            <th>S:No </th>
            <th>Fast Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>delete</th>
            <th>edit </th>
        </tr>
    </thead>
    <tbody>
    {todo?.map((val,i)=>(
        <tr key={i}>
            <td>{i+1} </td>
            <td>{val.fname}</td>
            <td>{val.lname}</td>
            <td>{val.age}</td>
            <td> <p onClick={()=>deletename(val._id)}>delete</p>
            <p onClick={()=>edite(val)}>edit </p> 
            </td>
            
        </tr>
        ))}
    </tbody>
</table>

<From open={open} handleClose={handleClose} vals={vals} id={id} />
</div>)
}
export default Todoget