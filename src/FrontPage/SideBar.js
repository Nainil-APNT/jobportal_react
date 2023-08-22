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
        {/* Add more sidebar items here */}
      </ul>
    </div>
  );
};

export default SideBar;
