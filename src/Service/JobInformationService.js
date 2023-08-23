import axios from "axios";
const JOBINFORMATION_API_BASE_URL = "http://localhost:9090/jobinformation";
const JOBINFORMATION_API_BASE_URL_CREATE = "http://localhost:9090/jobinformation/create";
const JOBINFORMATION_API_BASE_URL_GET = "http://localhost:9090/jobinformation/list";

  class JobInformationService {

      saveJobInformation(jobInformation){
            return axios.post(JOBINFORMATION_API_BASE_URL_CREATE, jobInformation);
        }
        getJobInformations(jobInformation){
          return axios.get(JOBINFORMATION_API_BASE_URL_GET);
      }

        deleteJobInformation(id){
          return axios.delete(JOBINFORMATION_API_BASE_URL+ "/" +id);
        }

        getJobInformationById(id){
          return axios.get(JOBINFORMATION_API_BASE_URL+ "/" +id);
        }

        UpdateJobInformation(jobInformation,id){
          return axios.put(JOBINFORMATION_API_BASE_URL+ "/" +id, jobInformation);
        }

}

const jobInformationServiceInstance = new JobInformationService();
export default jobInformationServiceInstance;