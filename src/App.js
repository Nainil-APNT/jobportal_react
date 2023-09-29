import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./Service/auth.service";

import Login from "./components/login.component";
import logo from './FrontPage/logo.png'
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import EventBus from "./common/EventBus";
import EmployeeList from "./employee_components/EmployeeList";  
import AddEmployee from "./employee_components/AddEmployee";
import UpdateEmployee from "./employee_components/UpdateEmployee";

import ApplicantList from "./applicant_components/ApplicantList";  
import AddApplicant from "./applicant_components/AddApplicant";
import UpdateApplicant from "./applicant_components/UpdateApplicant";

import CompanyList from "./company_components/CompanyList";  
import AddCompany from "./company_components/AddCompany";
import UpdateCompany from "./company_components/UpdateCompany";

import JobInformationList from "./jobinformation_components/JobInformationList";  
import AddJobInformation from "./jobinformation_components/AddJobInformation";
import UpdateJobInformation from "./jobinformation_components/UpdateJobInformation";

import JobCategoryList from "./JobCategory/JobCategoryList";  
import AddJobCategory from "./JobCategory/AddJobCategory";
import UpdateJobCategory from "./JobCategory/UpdateJobCategory";

import ForbiddenPage from "./errorPages/Forbidden";
import { PiListBold } from 'react-icons/pi';
import backgroundImage from './FrontPage/back.jpg'


function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showEmployeeBoardADMIN, setShowEmployeeBoardADMIN] = useState(false);
  const [showEmployeeBoardUSER, setShowEmployeeBoardUSER] = useState(false);
  
  const [showApplicantBoardADMIN, setShowApplicantBoardADMIN] = useState(false);
  const [showApplicantBoardUSER, setShowApplicantBoardUSER] = useState(false);

  const [showCompanyBoardADMIN, setShowCompanyBoardADMIN] = useState(false);
  const [showCompanyBoardUSER, setShowCompanyBoardUSER] = useState(false);

  const [showJobInformationBoardADMIN, setShowJobInformationBoardADMIN] = useState(false);
  const [showJobInformationBoardUSER, setShowJobInformationBoardUSER] = useState(false);

  const [showJobCategoryBoardADMIN, setShowJobCategoryBoardADMIN] = useState(false);
  const [showJobCategoryBoardUSER, setShowJobCategoryBoardUSER] = useState(false);

  const [currentUser, setCurrentUser] = useState(undefined);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const mainMenuRef = useRef(null);
  

  const toggleUserDropdown = () => {
    setIsMainMenuOpen(false); // Close the main menu
    setIsUserDropdownOpen((prevIsUserDropdownOpen) => !prevIsUserDropdownOpen);
  };

  const toggleMainMenu = () => {
    setIsUserDropdownOpen(false); // Close the user dropdown
    setIsMainMenuOpen((prevIsMainMenuOpen) => !prevIsMainMenuOpen);
  };




  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsUserDropdownOpen(false);
      }
      if (
        mainMenuRef.current &&
        !mainMenuRef.current.contains(event.target)
      ) {
        setIsMainMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowEmployeeBoardADMIN(user.roles.includes("ROLE_ADMIN"));
      setShowEmployeeBoardUSER(user.roles.includes("ROLE_USER"));
      setShowApplicantBoardADMIN(user.roles.includes("ROLE_ADMIN"))
      setShowApplicantBoardUSER(user.roles.includes("ROLE_USER"))
      setShowCompanyBoardADMIN(user.roles.includes("ROLE_ADMIN"))
      setShowCompanyBoardUSER(user.roles.includes("ROLE_USER"))
      setShowJobInformationBoardADMIN(user.roles.includes("ROLE_ADMIN"))
      setShowJobInformationBoardUSER(user.roles.includes("ROLE_USER"))
      setShowJobCategoryBoardADMIN(user.roles.includes("ROLE_ADMIN"))
      setShowJobCategoryBoardUSER(user.roles.includes("ROLE_USER"))
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setShowEmployeeBoardADMIN(false);
    setCurrentUser(undefined);
  };

  return (
    <div 
    style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
               }}

    >
      <nav className="navbar navbar-expand navbar-dark bg-transparent"

      style={{
        backdropFilter: 'blur(10px)',
      }}

      
      >
       
      
      <a href="http://apnttechnolabs.com/" className="flex items-center" style={{ textDecoration: 'none' }}>
      <img src={logo} className="h-16 mr-2" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-100 dark:text-white">Job Portal</span>
    </a>

        <div className="navbar-nav ml-6 mr-2">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link text-white">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {showEmployeeBoardADMIN && (
            <li className="nav-item">
              <Link to={"/employeeList"} className="nav-link">
                Employee
              </Link>
            </li>
          )}

          {showEmployeeBoardUSER && (
            <li className="nav-item">
              <Link to={"/employeeList"} className="nav-link">
                Employee
              </Link>
            </li>
          )}

          {showApplicantBoardADMIN && (
            <li className="nav-item">
              <Link to={"/applicantList"} className="nav-link">
                Applicant
              </Link>
            </li>
          )}

          {showApplicantBoardUSER && (
            <li className="nav-item">
              <Link to={"/applicantList"} className="nav-link">
               Applicant
              </Link>
            </li>
          )}
 

          {showCompanyBoardADMIN && (
            <li className="nav-item">
              <Link to={"/companyList"} className="nav-link">
                Company
              </Link>
            </li>
          )}

          {showCompanyBoardUSER && (
            <li className="nav-item">
              <Link to={"/companyList"} className="nav-link">
                Company
              </Link>
            </li>
          )}



          {showJobInformationBoardADMIN && (
            <li className="nav-item">
              <Link to={"/jobInformationList"} className="nav-link">
                Job Information
              </Link>
            </li>
          )}

          {showJobInformationBoardUSER && (
            <li className="nav-item">
              <Link to={"/jobInformationList"} className="nav-link">
               Job Information
              </Link>
            </li>
          )}


          {showJobCategoryBoardADMIN && (
            <li className="nav-item">
              <Link to={"/jobCategoryList"} className="nav-link">
                Job Category
              </Link>
            </li>
          )}

          {showJobCategoryBoardUSER && (
            <li className="nav-item">
              <Link to={"/jobCategoryList"} className="nav-link">
               Job Category
              </Link>
            </li>
          )}




          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link text-white">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link text-white">
                Signup
              </Link>
            </li>
          </div>
        )}





        <div className="relative flex items-center md:order-2">
        {/* Main Menu Dropdown with icon */}
        <div className="relative group">
          <button
            type="button"
            className="flex p-3"
            id="list-menu-button"
            aria-expanded={isMainMenuOpen}
            onClick={toggleMainMenu}
          >
            <span className="sr-only">Open list menu</span>
            <PiListBold color="white" size={30} />
          </button>
          {/* Main Menu Dropdown */}
          {isMainMenuOpen && (
            <div
            ref={mainMenuRef}
              className="z-50 absolute top-0 right-0 mt-12 w-32 bg-transparent rounded-lg shadow-md dark:bg-gray-700 dark:divide-gray-600"
              id="main-menu-dropdown"
            >
              {/* Add your Main Menu items here */}
              <ul className="py-2">
                <li>
                  <a href="/home" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>Home</a>
                </li>
                <li>
                  <a href="/employeeList" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>Employee</a>
                </li>
                <li>
                <a href="/applicantList" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>Applicant</a>
              </li>
             
              <li>
              <a href="/companyList" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>Company</a>
              </li>

             <li>
             <a href="/jobInformationList" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>Job Information</a>
             </li>

              <li>
              <a href="/jobCategoryList" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>Job Category</a>
             </li>


                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>About</a>
                </li>
                {/* Add more Main Menu items as needed */}
              </ul>
            </div>
          )}
        </div>

        <button
          type="button"
          className="flex ml-3 text-sm bg-gray-800 rounded-full md:ml-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded={isUserDropdownOpen}
          onClick={toggleUserDropdown}
        >
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src={logo} alt="user photo" />
        </button>

        {/* User Dropdown menu */}
        {isUserDropdownOpen && (
          <div
          ref={userDropdownRef}
            className="z-50 absolute top-0 right-0 mt-12 w-48 bg-transparent rounded-lg shadow-md dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-600">
              <span className="block text-sm text-white dark:text-white">APNT Technolabs</span>
              <span className="block text-sm text-white truncate dark:text-gray-400">apnt@gmail.com</span>
            </div>
            <ul className="py-2">
              <li>
                <a href="/login" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>Login</a>
              </li>
              <li>
                <a href="/register" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white" style={{ textDecoration: 'none' }}>Signup</a>
              </li>
              <li>
                <a href="/login" className="block px-4 py-2 text-sm text-white hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white"  onClick={logOut} style={{ textDecoration: 'none' }}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      </nav>


      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/forbidden" element={<ForbiddenPage />} />
          <Route path="/mod" element={<BoardModerator />} />
      
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />

          <Route path="/applicantList" element={<ApplicantList />} />
          <Route path="/addApplicant" element={<AddApplicant/>} />
          <Route path="/editApplicant/:id" element={<UpdateApplicant />} />

          <Route path="/companyList" element={<CompanyList />} />
          <Route path="/addCompany" element={<AddCompany />} />
          <Route path="/editCompany/:id" element={<UpdateCompany/>} />

          <Route path="/jobInformationList" element={<JobInformationList />} />
          <Route path="/addJobInformation" element={<AddJobInformation/>} />
          <Route path="/editJobInformation/:id" element={<UpdateJobInformation/>} />

          <Route path="/jobCategoryList" element={<JobCategoryList />} />
          <Route path="/addJobCategory" element={<AddJobCategory/>} />
          <Route path="/editJobCategory/:id" element={<UpdateJobCategory/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
