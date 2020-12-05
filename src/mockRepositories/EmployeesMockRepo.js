import { employee } from './mockData';

export default class EmployeesMockRepo {
  async getAllEmployees() {
    const result = employee.recordset;
    return Promise.resolve(result);
  }
}
