import React from 'react';
import { Route,Routes } from 'react-router-dom';
import ApplicantList from './ApplicantList';
import AddApplicant from './AddApplicant';
import UpdateApplicant from './UpdateApplicant';

function ApplicantConfig() {
  return (
  <Routes>
    <Route index element={<ApplicantList />} />
    <Route path="/" element={<ApplicantList />} />
    <Route path="/applicantList" element={<ApplicantList />} />
    <Route path="/AddApplicant" element={<AddApplicant />} /> 
    <Route path="/editApplicant/:id" element={<UpdateApplicant />} />
  </Routes>
  )
}

export default ApplicantConfig;
