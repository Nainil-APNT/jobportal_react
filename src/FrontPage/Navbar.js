// import React, { useState,useEffect, useRef } from 'react';
// import logo from '../FrontPage/logo.png';
// import { PiListBold } from 'react-icons/pi';
// //import Login from "../components/login.component";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
//   const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
//   const userDropdownRef = useRef(null);
//   const mainMenuRef = useRef(null);

//   const toggleUserDropdown = () => {
//     setIsMainMenuOpen(false); // Close the main menu
//     setIsUserDropdownOpen((prevIsUserDropdownOpen) => !prevIsUserDropdownOpen);
//   };

//   const toggleMainMenu = () => {
//     setIsUserDropdownOpen(false); // Close the user dropdown
//     setIsMainMenuOpen((prevIsMainMenuOpen) => !prevIsMainMenuOpen);
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         userDropdownRef.current &&
//         !userDropdownRef.current.contains(event.target)
//       ) {
//         setIsUserDropdownOpen(false);
//       }
//       if (
//         mainMenuRef.current &&
//         !mainMenuRef.current.contains(event.target)
//       ) {
//         setIsMainMenuOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);







//   return (
//     <nav
//       className="bg-transparent" // Set the background to transparent
//       style={{
//         backdropFilter: 'blur(10px)', // Apply a blur effect to the background
//       }}
//     >
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


//     <div className="relative flex items-center text-blue-100 md:order-2 mr-1">
//       <Link to={"/home"} className="navbar-brand">
//           Home
//       </Link>
//       <span className="ml-2 mr-2"></span> 
//       <Link to={"/login"} className="navbar-brand">
//          Login
//       </Link>
//       <span className="ml-2 mr-2"></span> 
//       <Link to={"/"} className="navbar-brand">
//       Signup
//    </Link>
//       </div>          


//         <div className="relative flex items-center md:order-2">
//           {/* Main Menu Dropdown with icon */}
//           <div className="relative group">
//             <button
//               type="button"
//               className="flex p-3"
//               id="list-menu-button"
//               aria-expanded={isMainMenuOpen}
//               onClick={toggleMainMenu}
//             >
//               <span className="sr-only">Open list menu</span>
//               <PiListBold color="white" size={30} />
//             </button>
//             {/* Main Menu Dropdown */}
//             {isMainMenuOpen && (
//               <div
//               ref={mainMenuRef}
//                 className="z-50 absolute top-0 right-0 mt-12 w-32 bg-transparent rounded-lg shadow-md dark:bg-gray-700 dark:divide-gray-600"
//                 id="main-menu-dropdown"
//               >
//                 {/* Add your Main Menu items here */}
//                 <ul className="py-2">
//                   <li>
//                     <a href="#" className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white">Home</a>
//                   </li>
//                   <li>
//                     <a href="#" className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white">Employee</a>
//                   </li>
//                   <li>
//                     <a href="#" className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white">About</a>
//                   </li>
//                   {/* Add more Main Menu items as needed */}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <button
//             type="button"
//             className="flex ml-3 text-sm bg-gray-800 rounded-full md:ml-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//             id="user-menu-button"
//             aria-expanded={isUserDropdownOpen}
//             onClick={toggleUserDropdown}
//           >
//             <span className="sr-only">Open user menu</span>
//             <img className="w-8 h-8 rounded-full" src={logo} alt="user photo" />
//           </button>

//           {/* User Dropdown menu */}
//           {isUserDropdownOpen && (
//             <div
//             ref={userDropdownRef}
//               className="z-50 absolute top-0 right-0 mt-12 w-48 bg-transparent rounded-lg shadow-md dark:bg-gray-700 dark:divide-gray-600"
//               id="user-dropdown"
//             >
//               <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-600">
//                 <span className="block text-sm text-blue-100 dark:text-white">APNT Technolabs</span>
//                 <span className="block text-sm text-blue-200 truncate dark:text-gray-400">apnt@gmail.com</span>
//               </div>
//               <ul className="py-2">
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white">Login</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white">Signup</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-white dark:hover:text-white">Logout</a>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>




              






//         <a href="http://apnttechnolabs.com/" className="flex items-center">
//           <img src={logo} className="h-16 mr-2" alt="Flowbite Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-100 dark:text-white">APNT Technolabs</span>
//         </a>



        






//         <button
//           data-collapse-toggle="navbar-user"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-user"
//           aria-expanded={isUserDropdownOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>


        


//       </div>
//     </nav>
//   );
// }

// export default Navbar;
