import React from 'react';
import { Route,Routes } from 'react-router-dom';
import ApplicationDetailsList from './ApplicationDetailsList';
import AddApplicationDetails from './AddApplicationDetails';
import UpdateApplicationDetails from './UpdateApplicationDetails';

function ApplicationDetailsConfig() {
  return (
    <Routes>
    <Route index element={<ApplicationDetailsList />} />
    <Route path="/" element={<ApplicationDetailsList />} />
    <Route path="/applicationDetailsList" element={<ApplicationDetailsList />} />
    <Route path="/addApplicationDetails" element={<AddApplicationDetails />} /> 
    <Route path="/editApplicationDetails/:id" element={<UpdateApplicationDetails />} />
  </Routes>
  )
}

export default ApplicationDetailsConfig;
