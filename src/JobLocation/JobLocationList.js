import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jobLocationServiceInstance from '../Service/JobLocationService';
import JobLocation from './JobLocation';

const JobLocationList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [joblocations, setJobLocations] = useState(null);


  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await jobLocationServiceInstance.getJobLocations();
        setJobLocations(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
      fetchData()

  }, [])

  const deleteJobLocation = (e,locationId) => {
          e.preventDefault();
          jobLocationServiceInstance.deleteJobLocation(locationId).then((res)=> {
                if(joblocations){
                  setJobLocations((prevElemenet)=>{
                      return prevElemenet.filter((jobLocation)=>jobLocation.locationId !== locationId)
                    })
                }
          });
  }


  return (
    <>
    <div className='container mx-auto my-8'>
      <div className='h-12'>
        <button onClick={()=>navigate("/addJobLocation")} className='rounded bg-slate-600 text-white px-6 py-2'>Add Job-Location</button>
        </div>
      <div className='flex shadow border-b'>
          <table className='min-w-full'>
            <thead className='bg-gray-200'>
                   <tr>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6' >Location Name</th>
                      <th className='text-right font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Actions</th>

                   </tr>
            </thead>
            {!loading && (
              <tbody className='bg-white'>
                {joblocations.map((jobLocation)=>(
                  <JobLocation jobLocation={jobLocation}  deleteJobLocation={deleteJobLocation} key={jobLocation.locationId}></JobLocation>
             ))}


              </tbody> )}


          </table>

      </div>

      </div>  
    </>
  )
}

export default JobLocationList;
