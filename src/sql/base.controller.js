const sql = require("mssql/msnodesqlv8");

export const getAll = async (request, tableName) => {
    const queryResult = await request.query(`select * from dbo.${tableName}`);
    return queryResult.recordset;
};