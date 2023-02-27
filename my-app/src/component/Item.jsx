import {useState} from 'react'
import Grid from '@mui/material/Grid';
import { Link, useParams} from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import './Name.css'
import {useDispatch, useSelector} from 'react-redux'
import {additem} from '../Redux/Reducer'
import Qty from './Qtyset'


const Item = () =>{
  const {id} = useParams()
const dispatch = useDispatch()
const [color,setcolor] = useState('')
const [item,setitem]   = useState('')
const [style,setstyle] = useState('')
const [line,setline]   = useState('')

const [size1,setsize1] = useState('')
const [size2,setsize2] = useState('')
const [size3,setsize3] = useState('')
const [size4,setsize4] = useState('')
const [size5,setsize5] = useState('')
const [size6,setsize6] = useState('')
const [size7,setsize7] = useState('')
const [size8,setsize8] = useState('')

const setitems = {
  id,
  item_id: Date.now(),
  color,
  item,
  style,
  line,
  size1:size1,
  size2:size2,
  size3:size3,
  size4:size4,
  size5:size5,
  size6:size6,
  size7:size7,
  size8:size8,
  size:[]
}

const itemSubmit = () =>{
  dispatch(additem(setitems))
}

  return(
      <Stack sx={{}}>
  <Link to={`/`}>go to po</Link>
      
<TextField
          label="Enter Color Name"
          type="text"
          variant="standard"
          value={color}
          onChange={(e)=>setcolor(e.target.value)}
        />
        
  <TextField
          label="Enter Item Name"
          type="text"
          variant="standard"
          value={item}
          onChange={(e)=>setitem(e.target.value)}
        />
        
         <TextField
          label="Enter Style"
          type="text"
          variant="standard"
          value={style}
          onChange={(e)=>setstyle(e.target.value)}
        />
         <TextField
          label="Enter A Line Number"
          type="text"
          variant="standard"
          value={line}
          onChange={(e)=>setline(e.target.value)}
        />

<h3>set size mixman set 8 fild</h3>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
          value={size1}
          onChange={(e)=>setsize1(e.target.value)}
        />
        </Grid>
        <Grid item xs={3}>
           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
          value={size2}
          onChange={(e)=>setsize2(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>
           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
          value={size3}
          onChange={(e)=>setsize3(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
          value={size4}
          onChange={(e)=>setsize4(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
          value={size5}
          onChange={(e)=>setsize5(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
          value={size6}
          onChange={(e)=>setsize6(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
          value={size7}
          onChange={(e)=>setsize7(e.target.value)}
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
          value={size8}
          onChange={(e)=>setsize8(e.target.value)}
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
export default Item
