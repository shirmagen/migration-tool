import {Basket} from './mongo/basket/basket.model'
import {find} from './mongo/basket/basket.controller'
import {connectMongoDb, disconnectMongoDb} from './mongo/mongo-connection';
import {createBasket} from './mongo/basket/index';

const bla = async () => {
    try {
        await connectMongoDb();
        const basket1 = new Basket({ name: 'basket1' });
        console.log(basket1);
        const result = await createBasket(basket1);
        await disconnectMongoDb();
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