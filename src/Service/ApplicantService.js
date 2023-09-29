import axios from "axios";
import authHeader from './auth-header';
const APPLICANT_API_BASE_URL = "http://localhost:8888/applicant";
const APPLICANT_API_BASE_URL_CREATE = "http://localhost:8888/applicant/create";
const APPLICANT_API_BASE_URL_GET = "http://localhost:8888/applicant/list";

  class ApplicantService {

      saveApplicant(applicant){
            return axios.post(APPLICANT_API_BASE_URL_CREATE, applicant,  { headers: authHeader() });
        }
        getApplicants(applicant){
          return axios.get(APPLICANT_API_BASE_URL_GET,  { headers: authHeader() });
      }

        deleteApplicant(id){
          return axios.delete(APPLICANT_API_BASE_URL+ "/" +id,  { headers: authHeader() });
        }

        getApplicantById(id){
          return axios.get(APPLICANT_API_BASE_URL+ "/" +id,  { headers: authHeader() });
        }

        UpdateApplicant(applicant,id){
          return axios.put(APPLICANT_API_BASE_URL+ "/" +id, applicant,  { headers: authHeader() });
        }

}

const applicantServiceInstance = new ApplicantService();
export default applicantServiceInstance;