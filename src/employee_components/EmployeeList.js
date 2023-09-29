import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import employeeServiceInstance from '../Service/EmployeeService';
import Employee from './Employee';
import AuthService from '../Service/auth.service'

const EmployeeList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);


  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await employeeServiceInstance.getEmployees();
        setEmployees(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
      fetchData()

  }, [])

  const deleteEmployee = (e,empid) => {
          e.preventDefault();
          employeeServiceInstance.deleteEmployee(empid).then((res)=> {
                if(employees){
                    setEmployees((prevElemenet)=>{
                      return prevElemenet.filter((employee)=>employee.empid !== empid)
                    })
                }
          });
  }



  
  const handleAddEmployeeClick = () => {
    const user = AuthService.getCurrentUser();

    if (user && user.roles.includes("ROLE_ADMIN")) {
      navigate('/addEmployee');
    } else {
      navigate('/forbidden');
    }
  };







  return (
    
    <div className='container mx-auto my-8'>
      <div className='h-12'>
     {/* <button onClick={()=>navigate("/addEmployee")} className='rounded bg-slate-600 text-white px-6 py-2'>Add Employee</button>  */}
     <button onClick={handleAddEmployeeClick}>Add Employee</button>
     </div>
      <div className='flex shadow border-b'>
          <table className='min-w-full'>
            <thead className='bg-gray-200'>
                   <tr>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6' >Name</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Contact</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Email</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Username</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Password</th>
                      <th className='text-right font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Actions</th>

                   </tr>
            </thead>
            {!loading && (
              <tbody className='bg-white'>
                {employees.map((employee)=>(
                  <Employee employee={employee}  deleteEmployee={deleteEmployee} key={employee.empid}></Employee>
             ))}


              </tbody> )}


          </table>

      </div>

      </div>  
   
  )
}

export default EmployeeList
