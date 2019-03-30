import {Basket} from './mongo/basket/basket.model'
import {connectMongoDb, disconnectMongoDb} from './mongo/mongo-connection';
import {connectSqlDb, getSqlConnectionObject, createRequest} from './sql/sql-connection'
import {getAllBaskets} from './sql/basket/basket.controller'
import {createBasket} from './mongo/basket/index';

const bla = async () => {
    try {
        connectMongoDb();
        const sqlConnection = getSqlConnectionObject();
        sqlConnection.connect().then( () => {
            console.log(sqlConnection);
        const req = createRequest(sqlConnection);
        const sqlBaskets = getAllBaskets(req); 
        sqlConnection.close();
        });
        const basket1 = new Basket({ name: 'basket1' });
        console.log(basket1);
        await createBasket(basket1);
        disconnectMongoDb();
    } catch (err) {
        // ... error checks
        console.log('caught an error:' + err);
    }
}

bla();
// connectMongoDb();
// const basket1 = new Basket({ name: 'basket1' });
// createBasket(basket1);
// disconnectMongoDb();