import React from 'react';
import { Route,Routes } from 'react-router-dom';
import CompanyList from './CompanyList';
import AddCompany from './AddCompany';
import UpdateCompany from './UpdateCompany';

function CompanyConfig() {
  return (
  <Routes>
    <Route index element={<CompanyList />} />
    <Route path="/" element={<CompanyList />} />
    <Route path="/companyList" element={<CompanyList />} />
    <Route path="/AddCompany" element={<AddCompany />} /> 
    <Route path="/editCompany/:id" element={<UpdateCompany />} />
  </Routes>
  )
}

export default CompanyConfig;
