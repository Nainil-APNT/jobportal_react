import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import jobInformationServiceInstance from '../Service/JobInformationService';

const UpdateJobInformation = () => {

  const{id} = useParams();

  const navigate = useNavigate();


  const [jobInformation,setJobInformation]= useState({
      id:id,
      title:"",
      description:"",
      noOfVacancy:"",
      type:"",
      salary:"",
      positionDate:"",
      applicationDate:"",
      status:"",
      jobLocation:""
    });


    const handleChange = (e) => {
      const value = e.target.value;
      setJobInformation ({...jobInformation,[e.target.name]: value});
  };


  useEffect(()=>{
      const fetchData = async() => {
        try {
            const response =await jobInformationServiceInstance.getJobInformationById(id);
            setJobInformation(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
  },[id]);



  const updateJobInformation =(e)=>{
    e.preventDefault();
    jobInformationServiceInstance.UpdateJobInformation(jobInformation,id)
    .then((response)=> {
      navigate("/jobInformationList");
    })
    .catch((error)=>{
      console.log(error);
    })
}


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">

    <div className="px-8 py-8">
      
      <div className="font-bold text-2xl tracking-wider">
            <h1>Update JobInformation</h1>
      </div>

      <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Title</label>
                <input type='text' name='title'  value={jobInformation.title}  onChange={(e)=> handleChange(e)} placeholder='Enter Job Title Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Description</label>
                <input type='text' name='description' value={jobInformation.description} onChange={(e)=> handleChange(e)} placeholder='Enter Description Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>No. Of Vacancy</label>
                <input type='number' name='noOfVacancy' value={jobInformation.noOfVacancy} onChange={(e)=> handleChange(e)} placeholder='Enter No. Of Vacancy Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Type</label>
                <input type='text'name='type' value={jobInformation.type} onChange={(e)=> handleChange(e)} placeholder='Enter Type Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Salary</label>
                <input type='number' name='salary' value={jobInformation.salary} onChange={(e)=> handleChange(e)} placeholder='Enter Salary Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>




          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Position Date</label>
                <input type='date' name='positionDate' value={jobInformation.positionDate} onChange={(e)=> handleChange(e)} placeholder='Enter Position Date Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Application Date</label>
                <input type='date' name='applicationDate' value={jobInformation.applicationDate} onChange={(e)=> handleChange(e)} placeholder='Enter Application Date Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Status</label>
                <input type='text' name='status' value={jobInformation.status} onChange={(e)=> handleChange(e)} placeholder='Enter Status Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>


          
          <div className="items-center justify-center h-14 w-full my-4">
                <label className='block text-gray-950-700 text-sm font-normal'>Job Location</label>
                <input type='text' name='jobLocation' value={jobInformation.jobLocation} onChange={(e)=> handleChange(e)} placeholder='Enter Location Here'  className='h-10 w-96 border mt-2 px-2 py-2'></input>
          </div>



        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={updateJobInformation} className='rounded text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-6'>Update</button>

          <button onClick={()=>navigate("/JobInformationList")} className='rounded text-white font-semibold bg-red-500 hover:bg-red-800 py-2 px-6'>Cancel</button>

        </div>

        


      
      </div>  


  </div>
  )
}

export default UpdateJobInformation;
