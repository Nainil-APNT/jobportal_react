import React from 'react'
import { useNavigate } from 'react-router-dom';

const Company = ({company,deleteCompany}) => {

    const navigate = useNavigate();

    const editCompany = (e,companyId)=>{
      e.preventDefault();
      navigate(`/editCompany/${companyId}`);
    }

  return (
    <tr key={company.companyId}>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{company.companyName}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{company.companyContact}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{company.companyAddress}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{company.companyEmail}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{company.companyUsername}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{company.companyPassword}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{company.companyWebsite}</div></td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
   
     {/*  <a onClick={(e,id)=> editCompany(e,company.id)} className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit </a>
      <a onClick={(e,id)=>deleteCompany(e,company.id)} className='text-red-500 hover:text-red-800  hover:cursor-pointer'>Delete </a>
     */}

<button
  onClick={(e) => editCompany(e, company.companyId)}
  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
>
  Edit
</button>
<button
  onClick={(e) => deleteCompany(e, company.companyId)}
  className="text-red-500 hover:text-red-800 hover:cursor-pointer"
>
  Delete
</button>



    </td>

</tr> 
  )
}

export default Company;
