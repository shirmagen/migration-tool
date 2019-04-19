import 'dotenv/config';
import {migrateCollection} from './migration/migration.controller';
import {ctor as BasketCtor, Basket} from './mongo/basket/basket.model';
import {ctor as BananaCtor, Banana} from './mongo/banana/banana.model';
import {getSqlConnectionObject, connectSqlDb, createRequest, disconnectSqlDb} from './sql/sql-connection';
import {connectMongoDb, disconnectMongoDb} from './mongo/mongo-connection';

const migrate = async () => {
    try {
        const sqlConnection = getSqlConnectionObject();
        await connectSqlDb(sqlConnection);
        const sqlRequest = createRequest(sqlConnection);
        await connectMongoDb();
        await migrateCollection('Basket', sqlRequest, BasketCtor, Basket);
        await migrateCollection('Banana', sqlRequest, BananaCtor, Banana);
        await disconnectSqlDb(sqlConnection);
        await disconnectMongoDb();

    } catch (err) {
        console.log('caught an error:' + err);
    }
}

migrate();