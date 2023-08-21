import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:9090/employee";
const EMPLOYEE_API_BASE_URL_CREATE = "http://localhost:9090/employee/create";
const EMPLOYEE_API_BASE_URL_GET = "http://localhost:9090/employee/list";

  class EmployeeService {

      saveEmployee(employee){
            return axios.post(EMPLOYEE_API_BASE_URL_CREATE, employee);
        }
        getEmployees(employee){
          return axios.get(EMPLOYEE_API_BASE_URL_GET);
      }

        deleteEmployee(id){
          return axios.delete(EMPLOYEE_API_BASE_URL+ "/" +id);
        }

        getEmployeeById(id){
          return axios.get(EMPLOYEE_API_BASE_URL+ "/" +id);
        }

        UpdateEmployee(employee,id){
          return axios.put(EMPLOYEE_API_BASE_URL+ "/" +id, employee);
        }

}

const employeeServiceInstance = new EmployeeService();
export default employeeServiceInstance;