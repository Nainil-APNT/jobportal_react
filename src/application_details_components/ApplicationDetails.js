import React from 'react'
import { useNavigate } from 'react-router-dom';

const ApplicationDetails = ({applicationDetails,deleteApplicationDetails}) => {

    const navigate = useNavigate();

    const editApplicationDetails = (e,id)=>{
      e.preventDefault();
      navigate(`/editApplicationDetails/${id}`);
    }

  return (
    <tr key={applicationDetails.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicationDetails.applicationStatus}</div></td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
   
    
<button
  onClick={(e) => editApplicationDetails(e, applicationDetails.id)}
  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"> Edit </button>

 

<button
  onClick={(e) => deleteApplicationDetails(e, applicationDetails.id)}
  className="text-red-500 hover:text-red-800 hover:cursor-pointer">Delete </button>

  

    </td>

</tr> 
  )
}

export default ApplicationDetails;
