import { getNetworth } from '../services/Networth';

export const REQUEST_NETWORTH = 'REQUEST_NETWORTH';
export const RECEIVE_NETWORTH = 'RECEIVE_NETWORTH';

const requestNetworth = () => ({
    type: REQUEST_NETWORTH
});

const receiveNetworth = (json) => ({
    type: RECEIVE_NETWORTH,
    payload: json,
});

export const fetchNetworth = () => dispatch => {
    dispatch(requestNetworth())
    return getNetworth().then((json) => {
        dispatch(receiveNetworth(json))
    })
}
