import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './FrontPage/SideBar';
import Navbar from './employee_components/Navbar';
import EmployeeConfig from './employee_components/EmployeeConfig';
import backgroundImage from './images/job.jpg';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        ></div>
        <div className="flex relative z-10">
          <SideBar />
          <EmployeeConfig />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
