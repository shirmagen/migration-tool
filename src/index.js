const sql = require("mssql/msnodesqlv8");
const conn = new sql.ConnectionPool({
  database: "migration-tool",
  server: "localhost\\SQLEXPRESS",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
});
conn.connect().then(() => {
    console.log('connected')
  // ... sproc call, error catching, etc
  // example: https://github.com/patriksimek/node-mssql#request
});