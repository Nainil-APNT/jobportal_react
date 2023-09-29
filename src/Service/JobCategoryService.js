import axios from "axios";
import authHeader from './auth-header';
const JOBCATEGORY_API_BASE_URL = "http://localhost:8888/jobcategory";
const JOBCATEGORY_API_BASE_URL_CREATE = "http://localhost:8888/jobcategory/create";
const JOBCATEGORY_API_BASE_URL_GET = "http://localhost:8888/jobcategory/list";

  class JobCategoryService {

      saveJobCategory(jobCategory){
            return axios.post(JOBCATEGORY_API_BASE_URL_CREATE, jobCategory, { headers: authHeader() });
        }
        getJobCategory(jobCategory){
          return axios.get(JOBCATEGORY_API_BASE_URL_GET, { headers: authHeader() });
      }

        deleteJobCategory(id){
          return axios.delete(JOBCATEGORY_API_BASE_URL+ "/" +id, { headers: authHeader() });
        }

        getJobCategoryById(id){
          return axios.get(JOBCATEGORY_API_BASE_URL+ "/" +id, { headers: authHeader() });
        }

        UpdateJobCategory(jobCategory,id){
          return axios.put(JOBCATEGORY_API_BASE_URL+ "/" +id, jobCategory, { headers: authHeader() });
        }

}

const jobCategoryServiceInstance = new JobCategoryService();
export default jobCategoryServiceInstance;