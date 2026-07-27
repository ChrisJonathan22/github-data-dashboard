import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';

function Sorting( { onSort } ) {

  const [ sortingOption, setSortingOption ] = useState("created");

  // Managin sorting values displayed in dropdown. Change sorting to selected option
  function handleSorting (event) {
    setSortingOption(event.target.value);
  }

  // When a user interacts with the sorting options send the data to the Repository List via onSort
  useEffect(() => {
    onSort(sortingOption);
  });

  return (
    <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="simple-sorting-label">Sorting</InputLabel>
            <Select
              labelId="simple-sorting-label"
              value={sortingOption}
              label="Sorting"
              onChange={(event) => handleSorting(event)}
            >
              <MenuItem value={"created"}>Created</MenuItem>
              <MenuItem value={"updated"}>Updated</MenuItem>
              <MenuItem value={"pushed"}>Pushed</MenuItem>
              <MenuItem value={"full_name"}>Full Name</MenuItem>
            </Select>
          </FormControl>
      </Box>
    </div>
  )
}

export default Sorting