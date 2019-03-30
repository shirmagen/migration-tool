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
    console.log('sql connected')
    const request = new sql.Request(conn);

    request.query('select * from dbo.Basket', function (err, recordset) {
        if (err)
            console.log(err);
        else
        console.log(recordset.recordsets[0]);
        conn.close();
    });
    
});