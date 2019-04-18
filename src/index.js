import {Basket} from './mongo/basket/basket.model'
import {connectMongoDb, disconnectMongoDb} from './mongo/mongo-connection';
import {connectSqlDb, getSqlConnectionObject, createRequest} from './sql/sql-connection'
import {getAllBaskets} from './sql/basket/basket.controller'
import {createBasket} from './mongo/basket/index';

const bla = async () => {
    try {
        connectMongoDb();
        const sqlConnection = getSqlConnectionObject();
        await sqlConnection.connect();
        const req = createRequest(sqlConnection);
        const sqlBaskets = await getAllBaskets(req);
        sqlConnection.close();
        const basket1 = new Basket({ name: sqlBaskets[0].Name });
        console.log(basket1);
        await createBasket(basket1);
        disconnectMongoDb();
    } catch (err) {
        console.log('caught an error:' + err);
    }
}

bla();