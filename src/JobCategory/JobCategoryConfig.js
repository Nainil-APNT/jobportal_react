import React from 'react';
import { Route,Routes } from 'react-router-dom';
import JobCategoryList from './JobCategoryList';
import AddJobCategory from './AddJobCategory';
import UpdateJobCategory from './UpdateJobCategory';

function JobCategoryConfig() {
  return (
    <Routes>
    <Route index element={<JobCategoryList />} />
    <Route path="/" element={<JobCategoryList />} />
    <Route path="/jobCategoryList" element={<JobCategoryList />} />
   <Route path="/addJobCategory" element={<AddJobCategory />} /> 
    <Route path="/editJobCategory/:id" element={<UpdateJobCategory />} />
  </Routes>
  )
}

export default JobCategoryConfig;
