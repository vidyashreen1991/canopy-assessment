import { createSelector } from 'redux-orm';
import orm from '../redux-orm/orm';

export const holdingsSelector = createSelector(
    orm,
    session => {
        let data = [];
        let assetClass = session.Holding.all().toRefArray().map(({ asset_class }) => {
            return asset_class
        });
        assetClass = Array.from(new Set(assetClass));
        assetClass.forEach(item => {
            data.push(session.Holding.filter({
                asset_class: item
            }).toRefArray())
        });
        return data
    }
);
