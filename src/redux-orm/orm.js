import { ORM } from 'redux-orm';
import { Holding } from './models';

const orm = new ORM({
    stateSelector: state => state.holdings,
});
orm.register(Holding);

export default orm;