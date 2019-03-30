const sql = require("mssql/msnodesqlv8");

export const getAll = async (request, tableName) => request.query(`select * from dbo.${tableName}`, (err, recordset) => {
    if (err)
        return console.log(err);
    console.log(recordset);
    return recordset.recordsets
});