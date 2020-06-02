import { getHoldings } from '../services/Holdings';

export const REQUEST_HOLDINGS = 'REQUEST_HOLDINGS';
export const RECEIVE_HOLDINGS = 'RECEIVE_HOLDINGS';

const requestHoldings = () => ({
    type: REQUEST_HOLDINGS
});

const receiveHoldings = (json) => ({
    type: RECEIVE_HOLDINGS,
    payload: json.payload,
});

export const fetchHoldings = () => dispatch => {
    dispatch(requestHoldings())
    return getHoldings().then((json) => {
        dispatch(receiveHoldings(json))
    })
}
