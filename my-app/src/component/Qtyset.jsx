import {useState} from 'react'
import Grid from '@mui/material/Grid';
import { Link, useParams} from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './Name.css'
import {useDispatch, useSelector} from 'react-redux'

const Qty = () =>{
  const {id} = useParams()
const dispatch = useDispatch()
const data = useSelector((state)=>state.tasks)

const jsonData = JSON.parse(localStorage.getItem('order'))
const find = jsonData?.find((val)=>val.id == id)

console.log('json data', find.ITEM[0].item_id)
const [qty1,setqty1] = useState('')
const [qty2,setqty2] = useState('')
const [qty3,setqty3] = useState('')
const [qty4,setqty4] = useState('')
const [qty5,setqty5] = useState('')
const [qty6,setqty6] = useState('')
const [qty7,setqty7] = useState('')
const [qty8,setqty8] = useState('')


const itemSubmit = () =>{
  dispatch()
}

  return(
      <Stack sx={{}}>
  
<h3>set quentey</h3>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
           <TextField
          label="Enter Qty"
          type="text"
          variant="standard"
          value={qty1}
          onChange={(e)=>setqty1(e.target.value)}
        />
        </Grid>
        <Grid item xs={3}>
           <TextField
          label="Enter Qty"
          type="text"
          variant="standard"
          value={qty2}
          onChange={(e)=>setqty2(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>
           <TextField
          label="Enter Qty"
          type="text"
          variant="standard"
          value={qty3}
          onChange={(e)=>setqty3(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Qty"
          type="text"
          variant="standard"
          value={qty4}
          onChange={(e)=>setqty4(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Qty"
          type="text"
          variant="standard"
          value={qty5}
          onChange={(e)=>setqty5(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Qty"
          type="text"
          variant="standard"
          value={qty6}
          onChange={(e)=>setqty6(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Qty"
          type="text"
          variant="standard"
          value={qty7}
          onChange={(e)=>setqty7(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Qty"
          type="text"
          variant="standard"
          value={qty8}
          onChange={(e)=>setqty8(e.target.value)}
        />
        </Grid>
        
      </Grid>
    </Box>
      
      <Button sx={{mt:2,with:100}} variant="contained" color="success"
      onClick={()=>itemSubmit()}
      >
        Submit
      </Button>
      
      
      
      
        
        
        </Stack>
)
  
}
export default Qty
