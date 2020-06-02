import { Model } from 'redux-orm';
import { v4 as uuidv4 } from 'uuid';
import { RECEIVE_HOLDINGS, REQUEST_HOLDINGS } from '../actions/Holdings';
export class Holding extends Model {
    static reducer(action, Holding) {
        switch (action.type) {
            case REQUEST_HOLDINGS:
                Holding.all().toModelArray().forEach(item => item.delete());
                break;
            case RECEIVE_HOLDINGS:
                action.payload.forEach(item => {
                    item = {
                        ...item,
                        id: uuidv4()
                    }
                    Holding.create(item)
                })
                break;
            default:
        }
        return Holding.state;
    }
}
Holding.modelName = 'Holding';