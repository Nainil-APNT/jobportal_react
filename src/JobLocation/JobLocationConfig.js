import React from 'react';
import { Route,Routes } from 'react-router-dom';
import JobLocationList from './JobLocationList';
import AddJobLocation from './AddJobLocation';
import UpdateJobLocation from './UpdateJobLocation';

function JobLocationConfig() {
  return (
    <Routes>
    <Route index element={<JobLocationList />} />
    <Route path="/" element={<JobLocationList />} />
    <Route path="/jobLocationList" element={<JobLocationList />} />
    <Route path="/addJobLocation" element={<AddJobLocation />} /> 
    <Route path="/editJobLocation/:id" element={<UpdateJobLocation />} />
  </Routes>
  )
}

export default JobLocationConfig;
