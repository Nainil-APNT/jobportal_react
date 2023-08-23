import axios from "axios";
const COMPANY_API_BASE_URL = "http://localhost:9090/company";
const COMPANY_API_BASE_URL_CREATE = "http://localhost:9090/company/create";
const COMPANY_API_BASE_URL_GET = "http://localhost:9090/company/list";

  class CompanyService {

      saveCompany(company){
            return axios.post(COMPANY_API_BASE_URL_CREATE, company);
        }
        getCompanies(company){
          return axios.get(COMPANY_API_BASE_URL_GET);
      }

        deleteCompany(id){
          return axios.delete(COMPANY_API_BASE_URL+ "/" +id);
        }

        getCompanyById(id){
          return axios.get(COMPANY_API_BASE_URL+ "/" +id);
        }

        UpdateCompany(company,id){
          return axios.put(COMPANY_API_BASE_URL+ "/" +id, company);
        }

}

const companyServiceInstance = new CompanyService();
export default companyServiceInstance;