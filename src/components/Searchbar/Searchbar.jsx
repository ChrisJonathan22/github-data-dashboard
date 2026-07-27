import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Searchbar.css';
import Sorting from '../Sorting/Sorting';

function Searchbar( { onSearch, onSort } ) {
  const [ input, setInput ] = useState("");

  // When a user interact with the search field, capture the input and update the input state
  function handleSearchInput (event) {
    setInput(event.target.value);
  }

  // When the search  button is clicked send the data to the Repository List via onSearch
  function handleSubmit () {
    onSearch(input);
  }

  return (
    <>
      <div className="searchbarContainer">
        <Stack direction={{ xs: "column", sm: "row"}} spacing={2} sx={{ justifyContent: "space-between" }}>
          <TextField id="outlined-basic" label="Enter a username..." variant="outlined" onChange={(event) => handleSearchInput(event)} />
          <Button variant="outlined" onClick={ handleSubmit }>Search</Button>
          <Sorting onSort={onSort} />
        </Stack>
      </div>
    </>
  )
}

export default Searchbar;