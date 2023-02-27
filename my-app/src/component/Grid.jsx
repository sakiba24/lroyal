
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
        />
        </Grid>
        <Grid item xs={3}>
           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
        />
        </Grid>
        <Grid item xs={3}>
           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
        />
        </Grid>
          <Grid item xs={3}>
           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
        />
        </Grid>
          <Grid item xs={3}>

           <TextField
          label="Enter Size"
          type="text"
          variant="standard"
        />
        </Grid>
        
      </Grid>
    </Box>
  );
}