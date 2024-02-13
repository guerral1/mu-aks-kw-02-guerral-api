import { detail } from './mockData.js';

export default class DetailsMockRepo {
  async getDetailsById(id) {
    const result = detail.recordset.filter((x) => x.id === id);
    return Promise.resolve(result);
  }
}
