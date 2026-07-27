import React from 'react';
import RepositoryList from '../RepositoryList/RepositoryList';
import './ContentPage.css';

function Contentpage() {
  return (
    <>
        <div className="contentContainer">
          <RepositoryList />
        </div>
    </>
  )
}

export default Contentpage;