import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import companyServiceInstance from '../Service/CompanyService';
import Company from './Company';
import AuthService from '../Service/auth.service'

const CompanyList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState(null);


  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await companyServiceInstance.getCompanies();
        setCompanies(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
      fetchData()

  }, [])

  const deleteCompany = (e,companyId) => {
          e.preventDefault();
          companyServiceInstance.deleteCompany(companyId).then((res)=> {
                if(companies){
                  setCompanies((prevElemenet)=>{
                      return prevElemenet.filter((company)=>company.companyId !== companyId)
                    })
                }
          });
  }



  
  const handleAddCompanyClick = () => {
    const user = AuthService.getCurrentUser();

    if (user && user.roles.includes("ROLE_ADMIN")) {
      navigate('/addCompany');
    } else {
      navigate('/forbidden');
    }
  };



  return (
    
    <div className='container mx-auto my-8'>
      <div className='h-12'>
      {/*  <button onClick={()=>navigate("/addCompany")} className='rounded bg-slate-600 text-white px-6 py-2'>Add Company</button> */} 
      <button onClick={handleAddCompanyClick}>Add Company</button>
      </div>
      <div className='flex shadow border-b'>
          <table className='min-w-full'>
            <thead className='bg-gray-200'>
                   <tr>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6' >Name</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Contact</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Address</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Email</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>UserName</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Password</th>
                      <th className='text-left font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Website</th>

                      <th className='text-right font-medium text-gray-800 uppercase tracking-wider py-3 px-6'>Actions</th>

                   </tr>
            </thead>
            {!loading && (
              <tbody className='bg-white'>
                {companies.map((company)=>(
                  <Company company={company}  deleteCompany={deleteCompany} key={company.companyId}></Company>
             ))}


              </tbody> )}


          </table>

      </div>

      </div>  
    
  )
}

export default CompanyList;
