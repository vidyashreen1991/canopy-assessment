import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';

import { networth } from './Networth';
import orm from '../redux-orm/orm';

export default combineReducers({
    networth,
    holdings: createReducer(orm)
});