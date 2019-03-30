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
    const request = new sql.Request(conn);

    request.query('select * from dbo.Basket', function (err, recordset) {
        if (err)
            console.log(err);
        else
        console.log(recordset.recordsets[0]);
        conn.close();
    });
    
  // ... sproc call, error catching, etc
  // example: https://github.com/patriksimek/node-mssql#request
});