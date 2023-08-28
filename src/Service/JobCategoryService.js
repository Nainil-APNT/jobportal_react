import axios from "axios";
const JOBCATEGORY_API_BASE_URL = "http://localhost:9090/jobcategory";
const JOBCATEGORY_API_BASE_URL_CREATE = "http://localhost:9090/jobcategory/create";
const JOBCATEGORY_API_BASE_URL_GET = "http://localhost:9090/jobcategory/list";

  class JobCategoryService {

      saveJobCategory(jobCategory){
            return axios.post(JOBCATEGORY_API_BASE_URL_CREATE, jobCategory);
        }
        getJobCategory(jobCategory){
          return axios.get(JOBCATEGORY_API_BASE_URL_GET);
      }

        deleteJobCategory(id){
          return axios.delete(JOBCATEGORY_API_BASE_URL+ "/" +id);
        }

        getJobCategoryById(id){
          return axios.get(JOBCATEGORY_API_BASE_URL+ "/" +id);
        }

        UpdateJobCategory(jobCategory,id){
          return axios.put(JOBCATEGORY_API_BASE_URL+ "/" +id, jobCategory);
        }

}

const jobCategoryServiceInstance = new JobCategoryService();
export default jobCategoryServiceInstance;