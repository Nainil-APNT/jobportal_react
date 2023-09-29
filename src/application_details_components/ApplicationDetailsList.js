import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import applicationDetailsServiceInstance from '../Service/ApplicationDetailsService';
import ApplicationDetails from './ApplicationDetails';

const ApplicationDetailsList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [applicationsDetails, setApplicationsDetails] = useState(null);


  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await applicationDetailsServiceInstance.getApplicationDetails();
        setApplicationsDetails(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
      fetchData()

  }, [])

  const deleteApplicationDetails = (e,applicationId) => {
          e.preventDefault();
          applicationDetailsServiceInstance.deleteApplicationDetails(applicationId).then((res)=> {
                if(applicationsDetails){
                  setApplicationsDetails((prevElemenet)=>{
                      return prevElemenet.filter((applicationDetails)=>applicationDetails.applicationId !== applicationId)
                    })
                }
          });
  }


  return (
    <>
    <div className='container mx-auto my-8'>
      <div className='h-12'>
        <button onClick={()=>navigate("/addEmployee")} className='rounded bg-slate-600 text-white px-6 py-2'>Add Application Details</button>
        </div>
      <div className='flex shadow border-b'>
          <table className='min-w-full'>
            <thead className='bg-gray-200'>
                   <tr>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6' >Application Status</th>
        
                      <th className='text-right font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Actions</th>

                   </tr>
            </thead>
            {!loading && (
              <tbody className='bg-white'>
                {applicationsDetails.map((applicationDetails)=>(
                  <ApplicationDetails applicationDetails={applicationDetails}  deleteApplicationDetails={deleteApplicationDetails} key={applicationDetails.applicationId}></ApplicationDetails>
             ))}


              </tbody> )}


          </table>

      </div>

      </div>  
    </>
  )
}

export default ApplicationDetailsList;
