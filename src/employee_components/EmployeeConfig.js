import React from 'react';
import { Route,Routes } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';

function EmployeeConfig() {
  return (
    <Routes>
    <Route index element={<EmployeeList />} />
    <Route path="/" element={<EmployeeList />} />
    <Route path="/employeeList" element={<EmployeeList />} />
   <Route path="/addEmployee" element={<AddEmployee />} /> 
    <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
  </Routes>
  )
}

export default EmployeeConfig;
