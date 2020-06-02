import { createSelector } from 'reselect';
import * as moment from 'moment';

const getNetworth = state => state.networth.data;

const getTodayTradedonIndex = (networth) => {
    let dayCount = -1, index = -1;
    while (index === -1) {
        dayCount++;
        let tradeDate = moment().subtract(dayCount, 'days').format('DD-MM-YYYY');
        index = networth.findIndex((item) => item.traded_on === tradeDate);
    }
    return index;
}

const getOneYearBeforeTradedonIndex = (networth) => {
    let dayCount = -1, index = -1;
    while (index === -1) {
        dayCount++;
        let tradeDate = moment().subtract(1, 'years').add(dayCount, 'days').format('DD-MM-YYYY');
        index = networth.findIndex((item) => item.traded_on === tradeDate);
    }
    return index;
}

export const getOneYearData = createSelector(getNetworth, networth => {

    if (networth.length) {
        networth.sort((a, b) => {
            return moment(a.traded_on, 'DD-MM-YYYY').valueOf() - moment(b.traded_on, 'DD-MM-YYYY').valueOf()
        });

        let todayIndex = getTodayTradedonIndex(networth);
        let oneYearBeforeIndex = getOneYearBeforeTradedonIndex(networth);

        return networth.slice(oneYearBeforeIndex, todayIndex);
    }
});
