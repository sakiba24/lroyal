import {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {useDispatch } from "react-redux"
import {dataset} from "../Redux/Action"

const From = ({open,handleClose,vals}) =>{
  const dispatch = useDispatch()
  
  const [ids,setids] = useState('')
  const [fname,setfname] = useState('')
  const [lname,setlname] = useState('')
  const [age,setage] = useState('')
  
  useEffect(()=>{
    setids(vals.id)
  setfname(vals.fname)
  setlname(vals.lname)
  setage(vals.age)
  
  },[vals])
//const {id,fname,lname,age} =  vals
console.log("id",ids)
const datasave = () =>{
  dispatch(dataset(ids,fname,lname,age))
handleClose()
  
}


  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edite your data</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            label="Fast Name"
            type="text"
            value={fname}
            onChange={(e) =>setfname(e.target.value)}
            fullWidth
            variant="standard"
          />
          
            <TextField
            autoFocus
            margin="dense"
            label="Last Name"
            type="text"
            value={lname}
            onChange={(e) =>setlname(e.target.value)}
            fullWidth
            variant="standard"
          />
          
            <TextField
            autoFocus
            margin="dense"
            label="Age"
            type="text"
            value={age}
            onChange={(e) =>setage(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={datasave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default From