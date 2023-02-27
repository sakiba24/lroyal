
import { useState } from 'react'
//import Link from '@mui/material/Link';
import {useDispatch, useSelector} from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import './Name.css'
import { Link, useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {deletereducer} from '../Redux/Reducer'
import AlertDialogSlide from './Deleteid'
import Show from './ShowItem'
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Item from './Item'

const ShowItem = () =>{
  const {id} = useParams()


   const dispatch = useDispatch()
  const data = useSelector((state)=>state.tasks)
  const finds = data.find((val)=>val.id == id)
  console.log(find)
  
  const [ids, setid] = useState('')
const [open, setOpen] =useState(false);

  const deletes = (id) =>{
    setOpen(true)
    setid(id)
   
    }
  
  const deleteConfram = () => {
    dispatch(deletereducer(ids))
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
      <Link to={'/'}>home </Link>
      <Link to={`/additem/${finds.id}`}> add item</Link>
       <Box sx={{display:'flex',justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width:'100%'
    }}>
    
    <Avatar
        alt="Remy Sharp"
        src="https://images.app.goo.gl/fdoXJkfrBySe37pw9"
        sx={{ width: 100, height: 100}}
      />
        <Typography> Proscess Order number: {finds.prosess_order}</Typography>
    
      </Box>
        <table class="styled-table">
    <thead>
        <tr>
            <th>COLOR </th>
            <th>ITEM</th>
            <th>LINE</th>
            <th>STYLE</th>
            <th>DELETE</th>
            <th>EDITE</th>
            <th>ADD </th>
        </tr>
    </thead>

      {finds?.ITEM?.map((val)=>(
  <tbody>

        <tr>
           <Link><td>{val.color}</td>
            </Link>
            <td>{val.item}</td>
            <td>{val.line}</td>
            <td>{val.style}</td>
            <td><DeleteIcon /> </td>
           <td>edite</td>
           <td>add</td>
            
            
        </tr>
    </tbody>

      ))}
   </table>
           </Grid>
           
        </Box>
      )
}

export default ShowItem
