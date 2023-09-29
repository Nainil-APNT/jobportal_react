import React from 'react'
import { useNavigate } from 'react-router-dom';

const Applicant = ({applicant,deleteApplicant}) => {

    const navigate = useNavigate();

    const editApplicant = (e,applicantId)=>{
      e.preventDefault();
      navigate(`/editApplicant/${applicantId}`);
    }

  return (
    <tr key={applicant.applicantId}>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicant.name}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicant.contact}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicant.email}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicant.username}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicant.password}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicant.gender}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicant.professionalSummary}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{applicant.highestEducation}</div></td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
   
     {/*  <a onClick={(e,id)=> editApplicant(e,applicant.id)} className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit </a>
      <a onClick={(e,id)=>deleteApplicant(e,applicant.id)} className='text-red-500 hover:text-red-800  hover:cursor-pointer'>Delete </a>
     */}

<button
  onClick={(e) => editApplicant(e, applicant.applicantId)}
  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
>
  Edit
</button>
<button
  onClick={(e) => deleteApplicant(e, applicant.applicantId)}
  className="text-red-500 hover:text-red-800 hover:cursor-pointer"
>
  Delete
</button>



    </td>

</tr> 
  )
}

export default Applicant;
