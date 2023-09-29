import React from 'react'
import { useNavigate } from 'react-router-dom';

const JobLocation = ({jobLocation,deleteJobLocation}) => {

    const navigate = useNavigate();

    const editJobLocation = (e,locationId)=>{
      e.preventDefault();
      navigate(`/editJobLocation/${locationId}`);
    }

  return (
    <tr key={jobLocation.locationId}>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobLocation.locationName}</div></td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
   
   

<button
  onClick={(e) => editJobLocation(e, jobLocation.locationId)}
  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
>
  Edit
</button>
<button
  onClick={(e) => deleteJobLocation(e, jobLocation.locationId)}
  className="text-red-500 hover:text-red-800 hover:cursor-pointer"
>
  Delete
</button>



    </td>

</tr> 
  )
}

export default JobLocation;
