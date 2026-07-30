import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

function PaginationNav({ page, hasNextPage, setPage, totalRepos }) {

  function handleNextPage (event, value) {
    setPage(value);
  }

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
    </Stack>
  )
}

export default PaginationNav;