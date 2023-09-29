import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jobCategoryServiceInstance from '../Service/JobCategoryService';
import JobCategory from './JobCategory';
import AuthService from '../Service/auth.service'

const JobCategoryList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [jobCategories, setJobCategories] = useState(null);


  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await jobCategoryServiceInstance.getJobCategory();
        setJobCategories(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
      fetchData()

  }, [])

  const deleteJobCategory = (e,categoryid) => {
          e.preventDefault();
          jobCategoryServiceInstance.deleteJobCategory(categoryid).then((res)=> {
                if(jobCategories){
                  setJobCategories((prevElemenet)=>{
                      return prevElemenet.filter((jobCategory)=>jobCategory.categoryid !== categoryid)
                    })
                }
          });
  }




  
  const handleAddJobCategoryClick = () => {
    const user = AuthService.getCurrentUser();

    if (user && user.roles.includes("ROLE_ADMIN")) {
      navigate('/addJobCategory');
    } else {
      navigate('/forbidden');
    }
  };




  return (
    
    <div className='container mx-auto my-8'>
      <div className='h-12'>
      {/*   <button onClick={()=>navigate("/addJobCategory")} className='rounded bg-slate-600 text-white px-6 py-2'>Add JobCategory</button> */}
      <button onClick={handleAddJobCategoryClick}>Add Job category</button>
      </div>
      <div className='flex shadow border-b'>
          <table className='min-w-full'>
            <thead className='bg-gray-200'>
                   <tr>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6' >Category Name</th>
                      <th className='text-right font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Actions</th>

                   </tr>
            </thead>
            {!loading && (
              <tbody className='bg-white'>
                {jobCategories.map((jobCategory)=>(
                  <JobCategory jobCategory={jobCategory}  deleteJobCategory={deleteJobCategory} key={jobCategory.categoryid}></JobCategory>
             ))}


              </tbody> )}


          </table>

      </div>

      </div>  
    
  )
}

export default JobCategoryList;
