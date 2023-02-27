import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const Show = () =>{
  
  return(
    <>
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
    <Typography> Proscess Order number: 4040027</Typography>
    <Typography> Color Name: Grey</Typography>
    <Typography> Item Name: Rio Brif</Typography>
    <Typography> STYLE NAME: Rio Brif</Typography>
    </Box>
    <Box sx={{width:'100%',overflow: 'auto'}}>
    <table class="styled-table">
    <thead>
        <tr>
            <th>DATE</th>
            <th>TIME </th>
            <th sx={{with:50}}>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
            <th>TOTAL</th>
            <th>G,TOTAL </th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <td>12.02.23</td>
            <td>10:00 pm </td>
            <td>450</td>
            <td>350</td>
            <td>1500</td>
            <td>500</td>
            <td>Q.T.Y: 3000</td>
            <td>00</td>
        </tr>
        <tr>
            <td align="center" colspan="2">SEWING BALANCE</td>
            <td>10</td>
            <td>30</td>
            <td>10</td>
            <td>50</td>
            <td colspan="2">200000</td>
            
        </tr>
         <tr>
            <td align="center" colspan="10">SEWING START</td>
        </tr>
        <tr>
           <td>12.02.23</td>
            <td>10:00.pm </td>
            <td>450</td>
            <td>350</td>
            <td>1500</td>
            <td>500</td>
            <td>3000</td>
            <td>20</td>
          </tr>
        <tr>
          <td>12.02.23</td>
            <td>10:00.pm </td>
            <td>45</td>
            <td>350</td>
            <td>15</td>
            <td>50</td>
            <td>30</td>
            <td>30</td>
          </tr>
          <tr> 
            <td> <TextField
            sx={{width:40}}
            label="DATE"
          type="date"
          variant="standard"
        /> </td>
          <td> <TextField
          sx={{width:40}}
          label="TIME"
          type="time"
          variant="standard"
        /> </td>
           <td> <TextField
           sx={{width:40}}
          label="S"
          type="text"
          variant="standard"
        /> </td>
          <td> <TextField
          sx={{width:40}}
        
          label="M"
          type="text"
          variant="standard"
        /> </td>
         <td> <TextField
         sx={{width:40}}
          label="L"
          type="text"
          variant="standard"
        /> </td>
         <td> <TextField
          sx={{width:40}}
          label="XL"
          type="text"
          variant="standard"
        
        /> </td>
        <td colspan='2'>
          <Button sx={{mt:2,with:100}} variant="contained" color="success">
        Submit
      </Button>
      </td>
          </tr>
          
    </tbody>
</table>
  </Box>
    </>
    )
}

export default Show