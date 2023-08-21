import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee,deleteEmployee}) => {

    const navigate = useNavigate();

    const editEmployee = (e,id)=>{
      e.preventDefault();
      navigate(`/editEmployee/${id}`);
    }

  return (
    <tr key={employee.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{employee.name}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{employee.contact}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{employee.email}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{employee.username}</div></td>
    <td className='text-left px-6 py-4 whitespace-nowrap'><div className='text-sm text-gray-500 '>{employee.password}</div></td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
   
     {/*  <a onClick={(e,id)=> editEmployee(e,employee.id)} className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit </a>
      <a onClick={(e,id)=>deleteEmployee(e,employee.id)} className='text-red-500 hover:text-red-800  hover:cursor-pointer'>Delete </a>
     */}

<button
  onClick={(e) => editEmployee(e, employee.id)}
  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
>
  Edit
</button>
<button
  onClick={(e) => deleteEmployee(e, employee.id)}
  className="text-red-500 hover:text-red-800 hover:cursor-pointer"
>
  Delete
</button>



    </td>

</tr> 
  )
}

export default Employee
