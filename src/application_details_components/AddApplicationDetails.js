import React, { useState } from 'react'
import applicationDetailsServiceInstance from '../Service/ApplicationDetailsService';
import { useNavigate } from 'react-router-dom';



function AddApplicationDetails() {


    const[applicationDetails, setApplicationDetails]=  useState({

      id:"",
      applicationStatus:""
     
      });

        /* for redirect to add page to list of applicationdetails */
      const navigate =  useNavigate();


      const handleChange = (e) => {
          const value = e.target.value;
          setApplicationDetails ({...applicationDetails,[e.target.name]: value});
      }

      const saveApplicationDetails = (e) =>{
        e.preventDefault();
        applicationDetailsServiceInstance.saveApplicationDetails(applicationDetails)
        .then((response)=>{
            console.log(response);
            navigate("/applicationDetailsList")
        })
        .catch((error)=>{
          console.log(error);
        })
      };

     const reset =(e) => {     /* for clear button */
      e.preventDefault();
      setApplicationDetails({
        id:"",
        applicationStatus:""
        })
     }


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">

      <div className="px-8 py-8">
        
        <div className="font-bold text-2xl tracking-wider">
              <h1>Add New Application Details</h1>
        </div>


          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Application Status</label>
                <input type='text' name='applicationStatus'  value={applicationDetails.applicationStatus}  onChange={(e)=> handleChange(e)} placeholder='Enter Application Status Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



        
          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button onClick={saveApplicationDetails} className='rounded text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-6'>Save</button>

            <button onClick={reset} className='rounded text-white font-semibold bg-red-500 hover:bg-red-800 py-2 px-6'>Clear</button>

          </div>

          


        
        </div>  


    </div>
  )
}

export default AddApplicationDetails;
