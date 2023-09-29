import React from 'react'
import { useNavigate } from 'react-router-dom';

const JobInformation = ({jobInformation,deleteJobInformation}) => {

    const navigate = useNavigate();

    const editJobInformation = (e,jobId)=>{
      e.preventDefault();
      navigate(`/editJobInformation/${jobId}`);
    }

  return (
    <tr key={jobInformation.jobId}>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.title}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.description}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.noOfVacancy}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.type}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.salary}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.positionDate}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.applicationDate}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.status}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobInformation.jobLocation}</div></td>

    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
   
     {/*  <a onClick={(e,id)=> editJobInformation(e,jobInformation.id)} className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit </a>
      <a onClick={(e,id)=>deleteJobInformation(e,jobInformation.id)} className='text-red-500 hover:text-red-800  hover:cursor-pointer'>Delete </a>
     */}

<button
  onClick={(e) => editJobInformation(e, jobInformation.jobId)}
  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
>
  Edit
</button>
<button
  onClick={(e) => deleteJobInformation(e, jobInformation.jobId)}
  className="text-red-500 hover:text-red-800 hover:cursor-pointer"
>
  Delete
</button>



    </td>

</tr> 
  )
}

export default JobInformation;
