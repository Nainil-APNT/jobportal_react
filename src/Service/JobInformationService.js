import axios from "axios";
import authHeader from './auth-header';
const JOBINFORMATION_API_BASE_URL = "http://localhost:8888/jobinformation";
const JOBINFORMATION_API_BASE_URL_CREATE = "http://localhost:8888/jobinformation/create";
const JOBINFORMATION_API_BASE_URL_GET = "http://localhost:8888/jobinformation/list";

  class JobInformationService {

      saveJobInformation(jobInformation){
            return axios.post(JOBINFORMATION_API_BASE_URL_CREATE, jobInformation, { headers: authHeader() });
        }
        getJobInformations(jobInformation){
          return axios.get(JOBINFORMATION_API_BASE_URL_GET, { headers: authHeader() });
      }

        deleteJobInformation(id){
          return axios.delete(JOBINFORMATION_API_BASE_URL+ "/" +id, { headers: authHeader() });
        }

        getJobInformationById(id){
          return axios.get(JOBINFORMATION_API_BASE_URL+ "/" +id, { headers: authHeader() });
        }

        UpdateJobInformation(jobInformation,id){
          return axios.put(JOBINFORMATION_API_BASE_URL+ "/" +id, jobInformation, { headers: authHeader() });
        }

}

const jobInformationServiceInstance = new JobInformationService();
export default jobInformationServiceInstance;