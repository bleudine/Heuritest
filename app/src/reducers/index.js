import {
    RECEIVED_LISTINGS, SORT_LIST, SET_CURRENCY, SET_LIMIT, RECEIVED_LISTINGS_ERROR, GET_LISTINGS
} from "../actions";

const defaultState = {
    listing: {
        list      : [],
        sortedKey : 'rank',
        ascending : true,
        limit     : 100,
        start     : 1,
        currencies: ['USD', 'GBP', 'EUR'],
        selected  : 'USD',
        loading: false,
    }
};

export const listing = (state = defaultState.listing, action) => {
    switch (action.type) {
        case GET_LISTINGS:
            return {
                ...state,
                loading: true,
            }
        case RECEIVED_LISTINGS:
            return {
                ...state,
                list: action.list.sort((a, b) => a.rank - b.rank),
                error: false,
                loading: false,
            };
        case RECEIVED_LISTINGS_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case SORT_LIST:
            return {
                ...state,
                list     : [
                    ...state.list.sort(function (a, b) {
                        const isAscending = (state.ascending ? 1 : -1) * (state.sortedKey === action.key ? 1 : -1);
                        if (action.nested) {
                            if (a.quotes[state.selected][action.key] < b.quotes[state.selected][action.key]) return -1 * isAscending;
                            if (a.quotes[state.selected][action.key] > b.quotes[state.selected][action.key]) return isAscending;
                        }
                        if (a[action.key] < b[action.key]) return -1 * isAscending;
                        if (a[action.key] > b[action.key]) return isAscending;
                        return 0;
                    })
                ],
                sortedKey: action.key,
                ascending: action.key === state.sortedKey ? !state.ascending : state.ascending,
            };
        case SET_CURRENCY:
            return {
                ...state,
                selected: action.currency
            };
        case SET_LIMIT:
            return {
                ...state,
                limit: action.limit,
            };
        default:
            return state;
    }
};