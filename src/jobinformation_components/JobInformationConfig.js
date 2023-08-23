import React from 'react';
import { Route,Routes } from 'react-router-dom';
import JobInformationList from './JobInformationList';
import AddJobInformation from './AddJobInformation';
import UpdateJobInformation from './UpdateJobInformation';

function JobInformationConfig() {
  return (
    <Routes>
    <Route index element={<JobInformationList />} />
    <Route path="/" element={<JobInformationList />} />
    <Route path="/jobInformationList" element={<JobInformationList />} />
    <Route path="/addJobInformation" element={<AddJobInformation />} /> 
    <Route path="/editJobInformation/:id" element={<UpdateJobInformation />} />
  </Routes>
  )
}

export default JobInformationConfig;
