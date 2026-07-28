import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

function PaginationNav({ page, hasNextPage, setPage, totalRepos }) {

  // const [ pagination, setPagination ] = useState(page);

  // function handleNextPage () {
  //   setPagination(pagination + 1);
  //   console.log("Current page: ", pagination);
  // }

  function handleNextPage (event, value) {
    setPage(value);
  }

  // When a user interacts with the pagination send the data to the Repository List via setPage
    // useEffect(() => {
    //   setPage(pagination);
    // }, []);

  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(totalRepos / 5)}
        page={ page } 
        onChange={handleNextPage} 
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{
              previous: () => "Previous",
              next: () => "Next",
            }}
          />
        )}
      />
      {/* <button
        disabled={!hasNextPage}
        onClick={handleNextPage}
      >
        Next
      </button> */}
    </Stack>
  )
}

export default PaginationNav;