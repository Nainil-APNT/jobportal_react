import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import applicantServiceInstance from '../Service/ApplicantService';
import Applicant from './Applicant';
import AuthService from '../Service/auth.service'

const ApplicantList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [applicants, setApplicants] = useState(null);


  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await applicantServiceInstance.getApplicants();
        setApplicants(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
      fetchData()

  }, [])

  const deleteApplicant = (e,applicantId) => {
          e.preventDefault();
          applicantServiceInstance.deleteApplicant(applicantId).then((res)=> {
                if(applicants){
                  setApplicants((prevElemenet)=>{
                      return prevElemenet.filter((applicant)=>applicant.applicantId !== applicantId)
                    })
                }
          });
  }



 
  const handleAddApplicantClick = () => {
    const user = AuthService.getCurrentUser();

    if (user && user.roles.includes("ROLE_ADMIN")) {
      navigate('/addApplicant');
    } else {
      navigate('/forbidden');
    }
  };



  return (
  
    <div className='container mx-auto my-8'>
      <div className='h-12'>
      {/*  <button onClick={()=>navigate("/addApplicant")} className='rounded bg-slate-600 text-white px-6 py-2'>Add Applicant</button> */} 
      <button onClick={handleAddApplicantClick}>Add Applicant</button>
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
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Gender</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Professional Summary</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Highest Education</th>
                      <th className='text-right font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Actions</th>

                   </tr>
            </thead>
            {!loading && (
              <tbody className='bg-white'>
                {applicants.map((applicant)=>(
                  <Applicant applicant={applicant}  deleteApplicant={deleteApplicant} key={applicant.applicantId}></Applicant>
             ))}


              </tbody> )}


          </table>

      </div>

      </div>  
 
  )
}

export default ApplicantList;
