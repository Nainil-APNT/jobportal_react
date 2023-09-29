import axios from "axios";
import authHeader from './auth-header';
const EMPLOYEE_API_BASE_URL = "http://localhost:8888/employee";
const EMPLOYEE_API_BASE_URL_CREATE = "http://localhost:8888/employee/create";
const EMPLOYEE_API_BASE_URL_GET = "http://localhost:8888/employee/list";

  class EmployeeService {

      saveEmployee(employee){
            return axios.post(EMPLOYEE_API_BASE_URL_CREATE, employee, { headers: authHeader() });
        }
        getEmployees(employee){
          return axios.get(EMPLOYEE_API_BASE_URL_GET, { headers: authHeader() });
      }

        deleteEmployee(id){
          return axios.delete(EMPLOYEE_API_BASE_URL+ "/" +id, { headers: authHeader() });
        }

        getEmployeeById(id){
          return axios.get(EMPLOYEE_API_BASE_URL+ "/" +id, { headers: authHeader() });
        }

        UpdateEmployee(employee,id){
          return axios.put(EMPLOYEE_API_BASE_URL+ "/" +id, employee, { headers: authHeader() });
        }

}

const employeeServiceInstance = new EmployeeService();
export default employeeServiceInstance;