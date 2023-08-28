import React, { useState } from 'react'
import employeeServiceInstance from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';



function AddEmployee() {


    const[employee, setEmployee]=  useState({

      id:"",
      name:"",
      contact:"",
      email:"",
      username:"",
      password:""
      });

        /* for redirect to add page to list of employees */
      const navigate =  useNavigate();


      const handleChange = (e) => {
          const value = e.target.value;
          setEmployee ({...employee,[e.target.name]: value});
      }

      const saveEmployee = (e) =>{
        e.preventDefault();
        employeeServiceInstance.saveEmployee(employee)
        .then((response)=>{
            console.log(response);
            navigate("/employeeList")
        })
        .catch((error)=>{
          console.log(error);
        })
      };

     const reset =(e) => {     /* for clear button */
      e.preventDefault();
      setEmployee({
        id:"",
        name:"",
        contact:"",
        email:"",
        username:"",
        password:""
        })
     }


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">

      <div className="px-8 py-8">
        
        <div className="font-bold text-2xl tracking-wider">
              <h1>Add New Employee</h1>
        </div>


          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Name</label>
                <input type='text' name='name'  value={employee.name}  onChange={(e)=> handleChange(e)} placeholder='Enter Name Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Contact</label>
                <input type='number' name='contact' value={employee.contact} onChange={(e)=> handleChange(e)} placeholder='Enter Contact Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Email</label>
                <input type='email' name='email' value={employee.email} onChange={(e)=> handleChange(e)} placeholder='Enter Email Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Username</label>
                <input type='text'name='username' value={employee.username} onChange={(e)=> handleChange(e)} placeholder='Enter Username Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Password</label>
                <input type='password' name='password' value={employee.password} onChange={(e)=> handleChange(e)} placeholder='Enter Password Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>


          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button onClick={saveEmployee} className='rounded text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-6'>Save</button>

            <button onClick={reset} className='rounded text-white font-semibold bg-red-500 hover:bg-red-800 py-2 px-6'>Clear</button>

          </div>

          


        
        </div>  


    </div>
  )
}

export default AddEmployee;
