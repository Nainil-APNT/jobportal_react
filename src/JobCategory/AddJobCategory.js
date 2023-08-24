import React, { useState } from 'react'
import jobCategoryServiceInstance from '../Service/JobCategoryService';
import { useNavigate } from 'react-router-dom';



function AddJobCategory() {


    const[jobCategory, setJobCategory]=  useState({

      id:"",
      categoryname:""

      });

        /* for redirect to add page to list of jobcategory */
      const navigate =  useNavigate();


      const handleChange = (e) => {
          const value = e.target.value;
          setJobCategory ({...jobCategory,[e.target.name]: value});
      }

      const saveJobCategory = (e) =>{
        e.preventDefault();
        jobCategoryServiceInstance.saveJobCategory(jobCategory)
        .then((response)=>{
            console.log(response);
            navigate("/jobCategoryList")
        })
        .catch((error)=>{
          console.log(error);
        })
      };

     const reset =(e) => {     /* for clear button */
      e.preventDefault();
      setJobCategory({
        id:"",
        categoryname:""

        })
     }


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">

      <div className="px-8 py-8">
        
        <div className="font-bold text-2xl tracking-wider">
              <h1>Add New JobCategory</h1>
        </div>


          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>CategoryName</label>
                <input type='text' name='categoryname'  value={jobCategory.categoryname}  onChange={(e)=> handleChange(e)} placeholder='Enter CategoryName Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



        


          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button onClick={saveJobCategory} className='rounded text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-6'>Save</button>

            <button onClick={reset} className='rounded text-white font-semibold bg-red-500 hover:bg-red-800 py-2 px-6'>Clear</button>

          </div>

          


        
        </div>  


    </div>
  )
}

export default AddJobCategory;
