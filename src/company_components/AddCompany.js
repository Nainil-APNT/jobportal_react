import React, { useState } from 'react'
import companyServiceInstance from '../Service/CompanyService';
import { useNavigate } from 'react-router-dom';



function AddCompany() {


    const[company, setCompany]=  useState({

      id:"",
      companyName:"",
      companyContact:"",
      companyAddress:"",
      companyEmail:"",
      companyUsername:"",
      companyPassword:"",
      companyWebsite:""
      
      });

        /* for redirect to add page to list of company */
      const navigate =  useNavigate();


      const handleChange = (e) => {
          const value = e.target.value;
          setCompany({...company,[e.target.name]: value});
      }

      const saveCompany = (e) =>{
        e.preventDefault();
        companyServiceInstance.saveCompany(company)
        .then((response)=>{
            console.log(response);
            navigate("/companyList")
        })
        .catch((error)=>{
          console.log(error);
        })
      };

     const reset =(e) => {     /* for clear button */
      e.preventDefault();
      setCompany({
        id:"",
        companyName:"",
        companyContact:"",
        companyAddress:"",
        companyEmail:"",
        companyUsername:"",
        companyPassword:"",
        companyWebsite:""
        })
     }


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">

      <div className="px-8 py-8">
        
        <div className="font-bold text-2xl tracking-wider">
              <h1>Add New Company</h1>
        </div>


          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Company Name</label>
                <input type='text' name='companyName'  value={company.companyName}  onChange={(e)=> handleChange(e)} placeholder='Enter Company Name Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Company Contact</label>
                <input type='number' name='companyContact' value={company.companyContact} onChange={(e)=> handleChange(e)} placeholder='Enter Company Contact Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Company Address</label>
                <input type='text' name='companyAddress' value={company.companyAddress} onChange={(e)=> handleChange(e)} placeholder='Enter Company Address Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Company Email</label>
                <input type='email'name='companyEmail' value={company.companyEmail} onChange={(e)=> handleChange(e)} placeholder='Enter Company Email Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Company Username</label>
                <input type='text' name='companyUsername' value={company.companyUsername} onChange={(e)=> handleChange(e)} placeholder='Enter Company Username Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>

          

          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Company Password</label>
                <input type='password' name='companyPassword' value={company.companyPassword} onChange={(e)=> handleChange(e)} placeholder='Enter Password Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Company Website</label>
                <input type='text' name='companyWebsite' value={company.companyWebsite} onChange={(e)=> handleChange(e)} placeholder='Enter Company Website Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>








          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button onClick={saveCompany} className='rounded text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-6'>Save</button>

            <button onClick={reset} className='rounded text-white font-semibold bg-red-500 hover:bg-red-800 py-2 px-6'>Clear</button>

          </div>

          


        
        </div>  


    </div>
  )
}

export default AddCompany;
