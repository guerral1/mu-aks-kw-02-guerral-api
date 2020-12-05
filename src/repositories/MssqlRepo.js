import mssql from 'mssql';

const sqlConfig = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  options: {
    port: process.env.DB_PORT,
    encrypt: true,
  },
};

let mssqlConnection;

export default class MssqlRepo {
  constructor() {}

  async getConnection() {
    console.info('getting connection...');

    if (mssqlConnection === undefined) {
      console.info('creating a new connection with the following configuration:', sqlConfig);
      mssqlConnection = new mssql.ConnectionPool(sqlConfig);
    }

    return mssqlConnection;
  }

  async standardExecute(sql) {
    console.info('retreiving information from database...');

    const connection = await this.getConnection();
    const pool = await connection.connect(sqlConfig);

    try {
      console.log('Executing query: ', sql);
      const request = await pool.request();
      const result = await request.query(sql);
      return result;
    } finally {
      pool.close();
    }
  }
}
