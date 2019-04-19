const sql = require("mssql/msnodesqlv8");

export const createRequest = conn => new sql.Request(conn);

export const getSqlConnectionObject = () => new sql.ConnectionPool({
    database: process.env.SQL_DB,
    server: process.env.SQL_SERVER,
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true
    }
  }); 

export const connectSqlDb = async conn => await conn.connect();

export const disconnectSqlDb = async conn => await conn.close(); 