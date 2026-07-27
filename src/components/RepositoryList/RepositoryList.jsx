import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useQuery } from "@tanstack/react-query";
import { fetchRepositories } from "../../features/repositories/api";
import Searchbar from '../Searchbar/Searchbar';
import PaginationNav from '../Pagination/Pagination';

function RepositoryList() {
    const [username, setUsername] = useState("");
    const [sort, setSort] = useState("created");
    const [direction, setDirection] = useState("desc");

    const { data: repositoryData, isLoading, isSuccess, isPending, isFetching, isError } = useQuery({
        queryKey: ["repositories", username, sort],
        queryFn: () => fetchRepositories(username, sort, direction),
        enabled: Boolean(username),
    });


    const tableColumns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'private', headerName: 'isPrivate?', width: 100 },
    { field: 'pushed_at', headerName: 'Pushed At', width: 130 },
    ];


  return (
    <div>
        <Searchbar onSearch={setUsername} onSort={setSort} />
        <div>
            { isLoading && ( <p>The repositories are being fetched</p>, <img alt='Loading gif' src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJsaTBmaWNhNWtlMGd5emVmZmR3bGJqcWZ3bmszeXlndjltajBzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/17mNCcKU1mJlrbXodo/giphy.gif' /> )}

            { isSuccess && ( <p>The data has been successfully fetched...</p>,
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={repositoryData}
                    columns={tableColumns}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper> )}
        </div>
        <PaginationNav />
    </div>
  )
}

export default RepositoryList