import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationNav({ page, hasNextPage, setPage, totalRepos }) {

  const [ pagination, setPagination ] = useState(page);

  function handleNextPage () {
    setPagination(pagination + 1);
    console.log("Current page: ", pagination);
  }

  // When a user interacts with the pagination send the data to the Repository List via setPage
    useEffect(() => {
      setPage(pagination);
    });

  return (
    <Stack spacing={2}>
      <Pagination
      count={Math.ceil(totalRepos / 5)}
        page={ pagination } 
        onChange={handleNextPage} 
        color="primary"
      />
      <button
        disabled={!hasNextPage}
        onClick={handleNextPage}
      >
        Next
      </button>
    </Stack>
  )
}

export default PaginationNav;