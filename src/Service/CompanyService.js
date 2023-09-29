import axios from "axios";
import authHeader from './auth-header';
const COMPANY_API_BASE_URL = "http://localhost:8888/company";
const COMPANY_API_BASE_URL_CREATE = "http://localhost:8888/company/create";
const COMPANY_API_BASE_URL_GET = "http://localhost:8888/company/list";

  class CompanyService {

      saveCompany(company){
            return axios.post(COMPANY_API_BASE_URL_CREATE, company, { headers: authHeader() });
        }
        getCompanies(company){
          return axios.get(COMPANY_API_BASE_URL_GET, { headers: authHeader() });
      }

        deleteCompany(id){
          return axios.delete(COMPANY_API_BASE_URL+ "/" +id, { headers: authHeader() });
        }

        getCompanyById(id){
          return axios.get(COMPANY_API_BASE_URL+ "/" +id, { headers: authHeader() });
        }

        UpdateCompany(company,id){
          return axios.put(COMPANY_API_BASE_URL+ "/" +id, company, { headers: authHeader() });
        }

}

const companyServiceInstance = new CompanyService();
export default companyServiceInstance;