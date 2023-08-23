import React, { useState } from 'react'
import applicantServiceInstance from '../Service/ApplicantService';
import { useNavigate } from 'react-router-dom';



function AddApplicant() {


    const[applicant, setApplicant]=  useState({

      id:"",
      name:"",
      contact:"",
      email:"",
      username:"",
      password:"",
      gender:"",
      professionalSummary:"",
      highestEducation:""
      
      });

        /* for redirect to add page to list of applicant */
      const navigate =  useNavigate();


      const handleChange = (e) => {
          const value = e.target.value;
          setApplicant ({...applicant,[e.target.name]: value});
      }

      const saveApplicant = (e) =>{
        e.preventDefault();
        applicantServiceInstance.saveApplicant(applicant)
        .then((response)=>{
            console.log(response);
            navigate("/applicantList")
        })
        .catch((error)=>{
          console.log(error);
        })
      };

     const reset =(e) => {     /* for clear button */
      e.preventDefault();
      setApplicant({
        id:"",
        name:"",
        contact:"",
        email:"",
        username:"",
        password:"",
        gender:"",
        professionalSummary:"",
        highestEducation:""
        })
     }


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">

      <div className="px-8 py-8">
        
        <div className="font-bold text-2xl tracking-wider">
              <h1>Add New Applicant</h1>
        </div>


          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Name</label>
                <input type='text' name='name'  value={applicant.name}  onChange={(e)=> handleChange(e)} placeholder='Enter Name Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Contact</label>
                <input type='number' name='contact' value={applicant.contact} onChange={(e)=> handleChange(e)} placeholder='Enter Contact Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Email</label>
                <input type='email' name='email' value={applicant.email} onChange={(e)=> handleChange(e)} placeholder='Enter Email Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Username</label>
                <input type='text'name='username' value={applicant.username} onChange={(e)=> handleChange(e)} placeholder='Enter Username Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Password</label>
                <input type='password' name='password' value={applicant.password} onChange={(e)=> handleChange(e)} placeholder='Enter Password Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>

          

          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Gender</label>
                <input type='text' name='gender' value={applicant.gender} onChange={(e)=> handleChange(e)} placeholder='Enter Gender Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Professional Summary</label>
                <input type='text' name='professionalSummary' value={applicant.professionalSummary} onChange={(e)=> handleChange(e)} placeholder='Enter ProfessionalSummary Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>




          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Highest Education</label>
                <input type='text' name='highestEducation' value={applicant.highestEducation} onChange={(e)=> handleChange(e)} placeholder='Enter HighestEducation Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>





          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button onClick={saveApplicant} className='rounded text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-6'>Save</button>

            <button onClick={reset} className='rounded text-white font-semibold bg-red-500 hover:bg-red-800 py-2 px-6'>Clear</button>

          </div>

          


        
        </div>  


    </div>
  )
}

export default AddApplicant;
