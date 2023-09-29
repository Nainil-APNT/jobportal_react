// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
// import { useContext, createContext, useState } from "react"
// import { Link } from "react-router-dom";
// import Logo from './logo.png';
// import {FaUserTie,FaUserGraduate,FaCircleInfo} from "react-icons/fa6"
// import { BsBuildingsFill } from "react-icons/bs";
// import {BiLogoAudible,BiSolidCategory} from "react-icons/bi"
// import {MdLocationPin} from "react-icons/md"
// import {TbListDetails} from "react-icons/tb"


// const SidebarContext = createContext()

// export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true)
  
//   return (
//     <aside className="h-screen">
//       <nav className="h-full flex flex-col bg-blue-950 border-r shadow-sm">
//         <div className="p-3 pb-2 flex justify-between items-center">
        
//         <BiLogoAudible color="white" size={40}/>
       
//        <div className={`overflow-hidden transition-all flex items-center  ${
//               expanded ? "w-30" : "w-0"
//             }`}>
     
//         <p className='text-white px-10  font-extrabold text-2xl'>Job Portal</p>
        
//         </div>
 
//           <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
//           >
//             {expanded ? <ChevronFirst /> : <ChevronLast />}
//           </button>
//         </div>


//         <hr className="my-2 border-gray-300" />




//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">

//             <div className=" flex p-3">
//                <BsBuildingsFill color="white" size={20}/>

//                 <div
//                  className={`
//                    flex justify-between items-center
//                     overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>
//                  <div className="leading-4">
//                  <Link to="/addCompany" className="block text-white px-10  font-semibold text-xl">
//                    Company
//                  </Link>
//               </div>
//            </div>
//          </div>







//     <div className=" flex p-3">
//         <FaUserTie color="white" size={20}/>
//       <div
//         className={`
//           flex justify-between items-center
//           overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>
//         <div className="leading-4">
//         <Link to="/addEmployee" className="block text-white px-10  font-semibold text-xl">
//             Employee
//           </Link>
//         </div>
//       </div>
//     </div>





//     <div className=" flex p-3">
//         <FaUserGraduate color="white" size={20}/>
//       <div
//         className={`
//           flex justify-between items-center
//           overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>
//         <div className="leading-4">
//         <Link to="/addApplicant" className="block text-white px-10  font-semibold text-xl">
//            Applicant
//           </Link>
//         </div>
//       </div>
//     </div>




//     <div className=" flex p-3">
//         <FaCircleInfo color="white" size={20}/>
//       <div
//         className={`
//           flex justify-between items-center
//           overflow-hidden transition-all ${expanded ? "w-50 ml-3" : "w-0"}`}>
//         <div className="leading-4">
//         <Link to="/addJobInformation" className="block text-white px-10  font-semibold text-xl">
//           Job Information
//           </Link>
//         </div>
//       </div>
//     </div>




//     <div className=" flex p-3">
//         <MdLocationPin color="white" size={20}/>
//       <div
//         className={`
//           flex justify-between items-center
//           overflow-hidden transition-all ${expanded ? "w-50 ml-3" : "w-0"}`}>
//         <div className="leading-4">
//         <Link to="/addJobLocation" className="block text-white px-10  font-semibold text-xl">
//           Job Location
//           </Link>
//         </div>
//       </div>
//     </div>




//     <div className=" flex p-3">
//         <TbListDetails color="white" size={20}/>
//       <div
//         className={`
//           flex justify-between items-center
//           overflow-hidden transition-all ${expanded ? "w-50 ml-3" : "w-0"}`}>
//         <div className="leading-4">
//         <Link to="/addApplicationDetails" className="block text-white px-10  font-semibold text-xl">
//           Application Detail
//           </Link>
//         </div>
//       </div>
//     </div>



                
//     <div className=" flex p-3">
//         <BiSolidCategory color="white" size={20}/>
//       <div
//         className={`
//           flex justify-between items-center
//           overflow-hidden transition-all ${expanded ? "w-50 ml-3" : "w-0"}`}>
//         <div className="leading-4">
//         <Link to="/addJobCategory" className="block text-white px-10  font-semibold text-xl">
//           Job Category
//           </Link>
//         </div>
//       </div>
//     </div>







//    </ul>




              



//         </SidebarContext.Provider>

//         <div className="border-t flex p-3">
        

//             <img src={Logo} alt="Logo" className="w-20 h-20 ml-0 " /> 

//           <div
//             className={`
//               flex justify-between items-center
//               overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}
//           `}
//           >
//             <div className="leading-4">
//               <h4 className="font-semibold text-white">APNT Technolabs</h4>
//               <span className="text-xs text-white">apnttechnolabs@gmail.com</span>
//             </div>
//             <MoreVertical size={20} className="text-white" />
//           </div>
//         </div>

//       </nav>

//       <div className="col p-0 m-0">

// <div className="p-2 d-flex justify-content-center shadow ">
//   <h4>Home</h4>
// </div>

// </div>


//     </aside>
//   )
// }

// export function SidebarItem({ icon, text, active, alert }) {
//   const { expanded } = useContext(SidebarContext)
  
//   return (
//     <li
//       className={`
//         relative flex items-center py-2 px-3 my-1
//         font-medium rounded-md cursor-pointer
//         transition-colors group
//         ${
//           active
//             ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
//             : "hover:bg-indigo-50 text-gray-600"
//         }
//     `}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all ${
//           expanded ? "w-40 ml-3" : "w-0"
//         }`}
//       >
//         {text}
//       </span>
//       {alert && (
//         <div
//           className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
//             expanded ? "" : "top-2"
//           }`}
//         />
//       )}

//       {!expanded && (
//         <div
//           className={`
//           absolute left-full rounded-md px-2 py-1 ml-6
//           bg-indigo-100 text-indigo-800 text-sm
//           invisible opacity-20 -translate-x-3 transition-all
//           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//       `}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   )
// }