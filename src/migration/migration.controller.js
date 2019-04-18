import {getAll} from '../sql/base.controller';
import {connectMongoDb, disconnectMongoDb} from '../mongo/mongo-connection';
import {connectSqlDb, getSqlConnectionObject, createRequest} from '../sql/sql-connection'
import { Basket } from '../mongo/basket/basket.model';

export const migrateCollection = async (collectionNameInSql, ctor, model) => {
    const sqlConnection = getSqlConnectionObject();
    await connectSqlDb(sqlConnection);
    const req = createRequest(sqlConnection);
    const allDocsInCollection = await getAll(req, collectionNameInSql);
    allDocsInCollection.map(async (doc) => {
        const mongoDoc = ctor(doc);
        connectMongoDb();
        await model.create(mongoDoc);
        disconnectMongoDb();
    });

};