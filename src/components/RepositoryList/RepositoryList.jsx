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
    const [ page, setPage ] = useState(1);

    const { data: repositoryResponse, isLoading, isSuccess } = useQuery({
        queryKey: ["repositories", username, sort, page],
        queryFn: () => fetchRepositories(username, sort, page),
        enabled: Boolean(username),
    });


    const tableColumns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'private', headerName: 'isPrivate?', width: 200 },
    { field: 'pushed_at', headerName: 'Pushed At', width: 230 },
    ];

    console.log("Total repos from repos list: ", repositoryResponse?.totalRepo);
    

return (
    <div>
        <Searchbar onSearch={setUsername} onSort={setSort} />
        <div>
            { isLoading && ( <p>The repositories are being fetched</p>, <img alt='Loading gif' src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJsaTBmaWNhNWtlMGd5emVmZmR3bGJqcWZ3bmszeXlndjltajBzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/17mNCcKU1mJlrbXodo/giphy.gif' /> )}

            { isSuccess && ( <p>The data has been successfully fetched...</p>,
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={repositoryResponse.data}
                    columns={tableColumns}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper> )}
        </div>
        <PaginationNav hasNextPage = { repositoryResponse?.hasNextPage } page={ page } setPage={ setPage } totalRepos = {repositoryResponse?.totalRepo} />
    </div>
)
}

export default RepositoryList