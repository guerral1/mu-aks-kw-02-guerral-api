import MssqlRepo from './MssqlRepo.js';

export default class EmployeesRepo extends MssqlRepo {
  async getAllEmployees() {
    const sql = 'SELECT * FROM [Employee];';
    const result = await this.standardExecute(sql);
    return result.recordset;
  }
}
