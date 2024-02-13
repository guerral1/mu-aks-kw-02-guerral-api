import MssqlRepo from './MssqlRepo.js';

export default class DetailsRepo extends MssqlRepo {
  async getDetailsById(id) {
    const sql = `SELECT * FROM [Detail] WHERE [id] = ${id};`;
    const result = await this.standardExecute(sql);
    return result.recordset;
  }
}
