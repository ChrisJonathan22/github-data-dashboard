import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Sorting from '../Sorting/Sorting';
import RepositoryList from '../RepositoryList/RepositoryList';
import PaginationNav from '../Pagination/Pagination';

function Contentpage() {
  return (
    <>
        <h3>Contentpage</h3>
        <div className="contentContainer">
          <Searchbar />
          <Sorting />
          <RepositoryList />
          <PaginationNav />
        </div>
    </>
  )
}

export default Contentpage;