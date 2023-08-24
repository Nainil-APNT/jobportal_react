import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './FrontPage/SideBar';
import EmployeeConfig from './employee_components/EmployeeConfig';
import backgroundImage from './FrontPage/job.jpg';
import Navbar from './FrontPage/Navbar';
import ApplicantConfig from './applicant_components/ApplicantConfig';
import CompanyConfig from './company_components/CompanyConfig';
import JobInformationConfig from './jobinformation_components/JobInformationConfig';
import JobLocationConfig from './JobLocation/JobLocationConfig';
import ApplicationDetailsConfig from './application_details_components/ApplicationDetailsConfig';
import JobCategoryConfig from './JobCategory/JobCategoryConfig';


function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <div className="h-screen relative">
     {/*    <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        ></div> */}
        <div className="flex relative z-10">
          <SideBar/>
          <EmployeeConfig />
          <ApplicantConfig />
          <CompanyConfig />
          <JobInformationConfig />
          <JobLocationConfig/>
          <ApplicationDetailsConfig />
          <JobCategoryConfig />
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
