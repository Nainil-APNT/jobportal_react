import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="bg-gray-700 w-1/6 h-screen p-4 text-white">
      <ul className="space-y-2">
        <li>
          <Link to="/addEmployee" className="block">
            Add Employee
          </Link>
        </li>
      
        <li>
          <Link to="/addApplicant" className="block">
            Add Applicant
          </Link>
        </li>

        <li>
          <Link to="/addCompany" className="block">
            Add Company
          </Link>
        </li>

        <li>
          <Link to="/addJobInformation" className="block">
           Add Job Information
          </Link>
        </li>



      </ul>
    </div>
  );
};

export default SideBar;
