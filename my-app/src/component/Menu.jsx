import './Name.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";


const Menu = () =>{
  return(
  <Grid container>
  <Grid item xs={6}>
   <div className='menu'>
     <ul>
       <li><Link to={'/'}>LROYAL</Link></li>
     </ul>

  </div>
  
  </Grid>
  <Grid item xs={6}>
    <div className='menu'>
     <ul>
       <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/regster'} >Regster</Link></li>
     </ul>

  </div>
 </Grid>
</Grid>
    )
}

export default Menu