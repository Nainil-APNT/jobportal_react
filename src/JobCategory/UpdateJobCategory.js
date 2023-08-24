import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import jobCategoryServiceInstance from '../Service/JobCategoryService';

const UpdateJobCategory = () => {

  const{id} = useParams();

  const navigate = useNavigate();


  const [jobCategory,setJobCategory]= useState({
    id:id,
    categoryname:""

    });


    const handleChange = (e) => {
      const value = e.target.value;
      setJobCategory ({...jobCategory,[e.target.name]: value});
  };


  useEffect(()=>{
      const fetchData = async() => {
        try {
            const response =await jobCategoryServiceInstance.getJobCategoryById(id);
            setJobCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
  },[id]);



  const UpdateJobCategory =(e)=>{
      e.preventDefault();
      jobCategoryServiceInstance.UpdateJobCategory(jobCategory,id)
      .then((response)=> {
        navigate("/jobCategoryList");
      })
      .catch((error)=>{
        console.log(error);
      })
  }


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">

    <div className="px-8 py-8">
      
      <div className="font-bold text-2xl tracking-wider">
            <h1>Update JobCategory</h1>
      </div>


        <div className="items-center justify-center h-14 w-full my-4">
              <label className='block text-gray-950-700 text-sm font-normal'>Category Name</label>
              <input type='text' name='categoryname'  value={jobCategory.categoryname}  onChange={(e)=> handleChange(e)} placeholder='Enter Category Name Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>



       

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={UpdateJobCategory} className='rounded text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-6'>Update</button>

          <button onClick={()=>navigate("/jobCategoryList")} className='rounded text-white font-semibold bg-red-500 hover:bg-red-800 py-2 px-6'>Cancel</button>

        </div>

        


      
      </div>  


  </div>
  )
}

export default UpdateJobCategory;
