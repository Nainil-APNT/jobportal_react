import axios from "axios";
const APPLICATIONDETAILS_API_BASE_URL = "http://localhost:9090/applicationdetails";
const APPLICATIONDETAILS_API_BASE_URL_CREATE = "http://localhost:9090/applicationdetails/create";
const APPLICATIONDETAILS_API_BASE_URL_GET = "http://localhost:9090/applicationdetails/list";

  class ApplicationDetailsService {

      saveApplicationDetails(applicationdetails){
            return axios.post(APPLICATIONDETAILS_API_BASE_URL_CREATE, applicationdetails);
        }
        getApplicationDetails(applicationdetails){
          return axios.get(APPLICATIONDETAILS_API_BASE_URL_GET);
      }

        deleteApplicationDetails(id){
          return axios.delete(APPLICATIONDETAILS_API_BASE_URL+ "/" +id);
        }

        getApplicationDetailsById(id){
          return axios.get(APPLICATIONDETAILS_API_BASE_URL+ "/" +id);
        }

        UpdateApplicationDetails(applicationdetails,id){
          return axios.put(APPLICATIONDETAILS_API_BASE_URL+ "/" +id, applicationdetails);
        }

}

const applicationDetailsServiceInstance = new ApplicationDetailsService();
export default applicationDetailsServiceInstance;