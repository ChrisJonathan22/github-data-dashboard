import React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';

function Searchbar() {
  return (
    <div>
      <h5>Searchbar</h5>

      <TextField id="outlined-basic" label="Search for account..." variant="outlined" />
    </div>
  )
}

export default Searchbar;