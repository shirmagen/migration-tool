import {migrateCollection} from './migration/migration.controller';
import {ctor as BasketCtor, Basket} from './mongo/basket/basket.model';
import {ctor as BananaCtor, Banana} from './mongo/banana/banana.model';

const migrate = async () => {
    try {
        migrateCollection('Basket', BasketCtor, Basket);
        migrateCollection('Banana', BananaCtor, Banana);

    } catch (err) {
        console.log('caught an error:' + err);
    }
}

migrate();