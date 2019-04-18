const sql = require("mssql/msnodesqlv8");

export const createRequest = conn => new sql.Request(conn);

export const getSqlConnectionObject = () => new sql.ConnectionPool({
    database: "migration-tool",
    server: "localhost\\SQLEXPRESS",
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true
    }
  }); 

export const connectSqlDb = async conn => await conn.connect();

export const disconnectSqlDb = async conn => await conn.close(); 