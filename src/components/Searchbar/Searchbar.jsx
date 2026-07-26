import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';

function Searchbar( { onSearch } ) {
  const [ input, setInput ] = useState("");

  function handleSubmit (e) {

    // Is the search submitted? capture the data, setInput and send it via onSearch

    setInput(e.target.value);

    console.log("Searchbar input: ", input);
    

    onSearch(input);
  }
  return (
    <div>
      <h5>Searchbar</h5>

      <TextField id="outlined-basic" label="Search for account..." variant="outlined" onSubmit={(e) => handleSubmit(e)} />

    </div>
  )
}

export default Searchbar;