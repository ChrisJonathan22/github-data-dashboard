import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useQuery } from "@tanstack/react-query";
import { fetchRepositories } from "../../features/repositories/api";


const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

function RepositoryList() {
     const [username, setUsername] = useState("");
    const [sort, setSort] = useState("created");
    const [direction, setDirection] = useState("desc");

    const { repositoryData, isLoading, isError } = useQuery({
        queryKey: ["repositories", username, sort],
        queryFn: () => fetchRepositories(username, sort, direction),
        enabled: Boolean(username),
    });

    const { data, loading } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  return (
    <div>
        <h5>RepositoryList</h5>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid {...data} loading={loading} />
        </div>
        <div>
            <h4>Repositories</h4>
            { isLoading ? <p>The repositories are being fetched</p> : repositoryData, <p>The data has been successfully fetched...</p>, console.log(repositoryData) }
        </div>
    </div>
  )
}

export default RepositoryList