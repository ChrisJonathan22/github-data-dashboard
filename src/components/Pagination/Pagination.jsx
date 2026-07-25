import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationNav() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" disabled />
    </Stack>
  )
}

export default PaginationNav