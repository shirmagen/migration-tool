import {getAll} from '../sql/base.controller';

export const migrateCollection = async (collectionNameInSql, sqlRequest, ctor, model) => {
    const allObjsInTable = await getAll(sqlRequest, collectionNameInSql);
    await saveSqlObjsInMongo(allObjsInTable, ctor, model);
};

const saveSqlObjsInMongo = async (allObjsInTable, ctor, model) => {
     await Promise.all(allObjsInTable.map(async (doc) => {
        const mongoDoc = ctor(doc);
        await model.create(mongoDoc);
     }));
};