import axios from "axios";
const JOBLOCATION_API_BASE_URL = "http://localhost:9090/joblocation";
const JOBLOCATION_API_BASE_URL_CREATE = "http://localhost:9090/joblocation/create";
const JOBLOCATION_API_BASE_URL_GET = "http://localhost:9090/joblocation/list";

  class JobLocationService {

      saveJobLocation(jobLocation){
            return axios.post(JOBLOCATION_API_BASE_URL_CREATE, jobLocation);
        }
        getJobLocations(jobLocation){
          return axios.get(JOBLOCATION_API_BASE_URL_GET);
      }

        deleteJobLocation(id){
          return axios.delete(JOBLOCATION_API_BASE_URL+ "/" +id);
        }

        getJobLocationById(id){
          return axios.get(JOBLOCATION_API_BASE_URL+ "/" +id);
        }

        UpdateJobLocation(jobLocation,id){
          return axios.put(JOBLOCATION_API_BASE_URL+ "/" +id, jobLocation);
        }

}

const jobLocationServiceInstance = new JobLocationService();
export default jobLocationServiceInstance;