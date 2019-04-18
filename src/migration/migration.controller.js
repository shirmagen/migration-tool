import {getAll} from '../sql/base.controller';
import {connectMongoDb, disconnectMongoDb} from '../mongo/mongo-connection';
import {connectSqlDb, getSqlConnectionObject, createRequest, disconnectSqlDb} from '../sql/sql-connection'

export const migrateCollection = async (collectionNameInSql, ctor, model) => {
    const sqlConnection = getSqlConnectionObject();
    await connectSqlDb(sqlConnection);
    const sqlRequest = createRequest(sqlConnection);
    const allObjsInTable = await getAll(sqlRequest, collectionNameInSql);
    await disconnectSqlDb(sqlConnection);
    await connectMongoDb();
    await saveSqlObjsInMongo(allObjsInTable, ctor, model);
    disconnectMongoDb();
};

const saveSqlObjsInMongo = async (allObjsInTable, ctor, model) => {
     await Promise.all(allObjsInTable.map(async (doc) => {
        const mongoDoc = ctor(doc);
        await model.create(mongoDoc);
     }));
};

async function setConnections(sqlConnection, sqlRequest) {
    sqlConnection = getSqlConnectionObject();
    await connectSqlDb(sqlConnection);
    sqlRequest = createRequest(sqlConnection);
    connectMongoDb();
};

const closeConnections = async (sqlConnection) => {
    disconnectSqlDb(sqlConnection);
    disconnectMongoDb();
;}