import {useState,useeffect} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Show from './ShowItem'
import {addTask} from '../Redux/Reducer'
import {useDispatch, useSelector} from 'react-redux'
import Showpo from './Showpo'
import { Link } from "react-router-dom";



function Process() {

const dispatch = useDispatch()
const [order,setoresr] = useState('')
const [bayer,setbayer] = useState('')


//const data = useSelector((state)=>state.tasks)

const submit = () =>{
  if(order.length >3 && bayer.length >2){
  dispatch(
    addTask({order,bayer})
  );
  
  setoresr('')
  setbayer('')
  } else{
    
  }
}

  
  return (
    <Stack sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',with:'50%'}}>
  
    <Link to={`itemset`}>go to item</Link>
     <Link to={`alldata`}>show</Link>
    
    <TextField
          label="Enter Process Order Number"
          type="text"
          variant="standard"
         value={order}
        onChange={(e)=>setoresr(e.target.value)}
        />
         <TextField
          label="Enter bayer name"
          type="text"
          variant="standard"
         value={bayer}
        onChange={(e)=>setbayer(e.target.value)}
        />
         
        <Button sx={{mt:2}} variant="contained" color="success"
        onClick={()=>submit()}
        >
        Success
      </Button>
      <Showpo />
      </Stack>
     )
}

export default Process
