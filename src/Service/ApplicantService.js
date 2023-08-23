import axios from "axios";
const APPLICANT_API_BASE_URL = "http://localhost:9090/applicant";
const APPLICANT_API_BASE_URL_CREATE = "http://localhost:9090/applicant/create";
const APPLICANT_API_BASE_URL_GET = "http://localhost:9090/applicant/list";

  class ApplicantService {

      saveApplicant(applicant){
            return axios.post(APPLICANT_API_BASE_URL_CREATE, applicant);
        }
        getApplicants(applicant){
          return axios.get(APPLICANT_API_BASE_URL_GET);
      }

        deleteApplicant(id){
          return axios.delete(APPLICANT_API_BASE_URL+ "/" +id);
        }

        getApplicantById(id){
          return axios.get(APPLICANT_API_BASE_URL+ "/" +id);
        }

        UpdateApplicant(applicant,id){
          return axios.put(APPLICANT_API_BASE_URL+ "/" +id, applicant);
        }

}

const applicantServiceInstance = new ApplicantService();
export default applicantServiceInstance;