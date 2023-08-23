import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jobInformationServiceInstance from '../Service/JobInformationService';
import JobInformation from './JobInformation';

const JobInformationList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [jobInformations, setJobInformations] = useState(null);


  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await jobInformationServiceInstance.getJobInformations();
        setJobInformations(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
      fetchData()

  }, [])

  const deleteJobInformation = (e,id) => {
          e.preventDefault();
          jobInformationServiceInstance.deleteJobInformation(id).then((res)=> {
                if(jobInformations){
                  setJobInformations((prevElemenet)=>{
                      return prevElemenet.filter((jobInformation)=>jobInformation.id !== id)
                    })
                }
          });
  }


  return (
    <>
    <div className='container mx-auto my-8'>
      <div className='h-12'>
        <button onClick={()=>navigate("/addJobInformation")} className='rounded bg-slate-600 text-white px-6 py-2'>Add JobInformation</button>
        </div>
      <div className='flex shadow border-b'>
          <table className='min-w-full'>
            <thead className='bg-gray-200'>
                   <tr>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Title</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Description</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>No Of Vacancy</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Type</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Salary</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Position Date</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Application Date</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Status</th>
                      <th className='text-right font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Actions</th>
                   </tr>
            </thead>
            {!loading && (
              <tbody className='bg-white'>
                {jobInformations.map((jobInformation)=>(
                  <JobInformation jobInformation={jobInformation}  deleteJobInformation={deleteJobInformation} key={jobInformation.id}></JobInformation>
             ))}


              </tbody> )}


          </table>

      </div>

      </div>  
    </>
  )
}

export default JobInformationList;
