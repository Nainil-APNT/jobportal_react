import React from 'react'
import { useNavigate } from 'react-router-dom';

const JobCategory = ({jobCategory,deleteJobCategory}) => {

    const navigate = useNavigate();

    const editJobCategory = (e,categoryid)=>{
      e.preventDefault();
      navigate(`/editJobCategory/${categoryid}`);
    }

  return (
    <tr key={jobCategory.categoryid}>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{jobCategory.categoryname}</div></td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
   
   

<button
  onClick={(e) => editJobCategory(e, jobCategory.categoryid)}
  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
>
  Edit
</button>
<button
  onClick={(e) => deleteJobCategory(e, jobCategory.categoryid)}
  className="text-red-500 hover:text-red-800 hover:cursor-pointer"
>
  Delete
</button>



    </td>

</tr> 
  )
}

export default JobCategory;
