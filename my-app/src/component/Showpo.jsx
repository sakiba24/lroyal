
import { useState } from 'react'
//import Link from '@mui/material/Link';
import {useDispatch, useSelector} from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import './Name.css'
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {deletereducer} from '../Redux/Reducer'
import AlertDialogSlide from './Deleteid'
import Show from './ShowItem'


const Showpo = () =>{

   const dispatch = useDispatch()
  const data = useSelector((state)=>state.tasks)
  console.log(data)
  
  const [id, setid] = useState('')
const [open, setOpen] =useState(false);

  const deletes = (id) =>{
    setOpen(true)
    setid(id)
   
    }
  
  const deleteConfram = () => {
    dispatch(deletereducer(id))
    setOpen(false)
  }
  
    return(
      
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{mt:1}}>
      <AlertDialogSlide
        open={open}
        setOpen={setOpen}
        deleteConfram={deleteConfram}
      />
      {data.map((val)=>(
      <>
        <Grid key={val.id} item xs={10}>
         <Link to={`itemset/${val.id}`}>
         Po : {val.prosess_order} name : {val.beyername}
           </Link>
        </Grid>
          <Grid item xs={2}>
           <Link onClick={()=>deletes(val.id)} >
             <DeleteIcon />
           </Link>
        </Grid>
        </>
      ))}
           </Grid>
           
        </Box>
      )
}

export default Showpo
