import {
    REQUEST_NETWORTH,
    RECEIVE_NETWORTH
} from '../actions/Networth';

const defaultState = {
    isRequestingNetworth: false,
    data: []
}

export const networth = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_NETWORTH:
            return {
                ...state,
                isRequestingNetworth: true
            }
        case RECEIVE_NETWORTH:
            return {
                ...state,
                isRequestingNetworth: false,
                data: action.payload,
                categoryField: 'traded_on',
                valueField: 'net_worth',
                dateFormat: 'DD-MM-YYYY'
            }
        default:
            return state
    }
}
